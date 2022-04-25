exports.middlewareGlobal = (req, res, next) => {
  next()
}
exports.outroMiddleware = (req, res, next) => {
  next()
}

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === "EBADCSRFTOKEN") {
    return res.send('bad CSRF')
  }
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}