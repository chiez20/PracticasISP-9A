const {app} = require('./index');

const server = app.listen(process.env.PORT, ()=>{
  console.log('servidor iniciado');
})

module.exports= server;
