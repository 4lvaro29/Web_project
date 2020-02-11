express = require("express"),
path = require("path"),
app = express(),
port = process.env.PORT || 3000;

    app.listen('3000',function(){
      console.log('server ok listen to 3000 port')
    })
    app.get('/index.html', (peticion, respuesta) => {
      // Servir archivo HTML, o cualquier otro archivo
      let rutaDeArchivo = path.join(__dirname, "index.html");
      respuesta.sendFile(rutaDeArchivo);
  });