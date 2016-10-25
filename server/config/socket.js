module.exports = function (app, io) {
  io.on('connection', socket => {
    console.log('connected!')

    

    socket.on('disconnect', () => {
      console.log('disconnected')
    })
  })

  app.use((req, res, next) => {
    req.io = io
    next()
  })
}
