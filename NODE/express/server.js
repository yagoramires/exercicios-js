// CRUD -> CREATE READ  UPDATE    DELETE
//         CRIAR  LER   ATUALIZAR APAGAR
//         POST   GET   PUT       DELETE

// https://meusite.com/ <- GET -> Entregue a página home
// rota "/" do site
// https://meusite.com/sobre <- GET -> Entregue a página sobre
// https://meusite.com/contato <- GET -> Entregue a página contato

//URL params = https://meusite.com/profiles/123131 => "123131" params
//URL params = https://meusite.com/profiles/123131?campanha=googleads => "?campanha=googleads" query string
//URL params = https://meusite.com/profiles/123131?campanha=googleads&outracampanha=facebook => "&outracampanha=facebook" mais de uma query string

// req = requisicao e res = resposta

//Se refere as variáveis de ambiente configuradas no arquivo .env que ficam escondidas do repositório como senhas e chaves SSH
require('dotenv').config()

//Inicializacao do Express
const express = require('express');
const app = express();

//Mongoose: modela a base de dados e garante que eles sao salvos da forma que desejamos.
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology:true})
  .then(()=>{  //O MONGOOSE RETORNA UMA PROMISE TRATADA NO .THEN
    // console.log("Conectou a base de dados")
    app.emit('pronto') //Quando ele estiver conectado ele irá emitir um evento dizendo que já está conectado
  })
  .catch(e => console.log(e))

  //Session identifica o computador do cliente através de cookies.
  const session = require('express-session')

  //As sessoes vao ser salvas dentro da base de dados.
  const ConnectMongo = require('connect-mongo')

  //Mensagens autodestrutivas, assim que for lida ela some da base de dados.
  const flash = require('connect-flash')

  //Rotas da aplicação
  const routes = require('./routes');

  //Path serve para trabalhar com os caminhos relativos de arquivos
  const path = require('path');

  //Recomendação dos desenvolvedores do express para segurança do app
  const helmet = require('helmet')

  //Tokens criados para os formularios serem enviados, fazendo com que nenhum outro app ou site externo consiga postar coisas dentro da aplicação
  const csrf = require('csurf')

  //middlewares, são funções executadas nas rotas.
  const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')
  
  //executa o helmet
  app.use(helmet())

  //esta linha permite que os formularios sejam postados para dentro do app
  app.use(express.urlencoded({extended: true}))
  //utilizado para json
  app.use(express.json())
  //todos os arquivos estaticos do app, como imagens, css, JS. tudo que estiver na pasta public poderá ser acessado diretamente
  app.use(express.static(path.resolve(__dirname, "public")))

  //configuracao de session
  const sessionOptions = session({
    secret: 'IMmhihmiTYFUNBDTRYgyu89879678tg7656gyjfkoia9qoioi2oiejkoldklajodaikhjfSDFASDGHGH',
    store: ConnectMongo.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600 * 24 * 7,
      httpOnly: true
    }
  })

  //uso do session options
  app.use(sessionOptions)
  //uso do flash
  app.use(flash())
  
  //são os arquivos exibidos na tela. aqui seleciona o caminho:
  app.set('views', path.resolve(__dirname, "src", 'views'))
  //aqui seleciona a engine utilizada para renderizar a pagina, no caso ejs:
  app.set('view engine', 'ejs')
  
  //uso do csrf (segurança)
  app.use(csrf())

  //Nossos próprios MiddleWares
  app.use(middlewareGlobal) //middleware global
  app.use(checkCsrfError) // erro se nao tiver o token
  app.use(csrfMiddleware) // define o token
  app.use(routes) //chama as rotas


  //Evento do mongoose validando sua conexao dizendo que está pronto
app.on('pronto', ()=>{
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000/')
    
    console.log('Servidor executando na porta 3000')
  })
})