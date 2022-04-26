const Login = require('../models/LoginModel')

exports.index = function (req,res) {
  if(req.session.user) return res.render('login-logado')
  res.render('login')
}

exports.register = async function (req,res) {
  try{
    const login = new Login(req.body)
    await login.register()
  
    if(login.errors.length > 0) {
      req.flash('errors', login.errors)
      req.session.save(function() {
       return res.redirect('/login/index')
      })
      return
    }
  
    req.flash('success', 'Seu usuário foi criado com sucesso!')
    req.session.save(function() {
     return res.redirect('/login/index')
    })

  } catch(e) {
    console.log(e)
    res.render('404')
  }
}

exports.login = async function (req,res) {
  try{
    const login = new Login(req.body)
    await login.login()
  
    if(login.errors.length > 0) {
      req.flash('errors', login.errors)
      req.session.save(function() {
       return res.redirect('/login/index')
      })
      return
    }
    
    req.flash('success', 'Seu usuário foi conectado com sucesso!')
    req.session.user = login.user
    req.session.save(function() {
     return res.redirect('/login/index')
    })

  } catch(e) {
    console.log(e)
    res.render('404')
  }
}

exports.logout = function(req, res) {
  req.session.destroy()
  res.redirect('/login/index')
}