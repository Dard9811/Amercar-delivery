var express = require("express");
var router = express.Router();

/* const url = "mongodb://localhost:27017"; *//* "mongodb+srv://<username>:<password>@amercar-p9oq8.mongodb.net/test?retryWrites=true&w=majority"; */
/* const client = new MongoClient(url); */



function connectUsuarios(callback){
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb+srv://daniel:dard98031160243@amercar-p9oq8.mongodb.net/test?retryWrites=true&w=majority";
  // Seria bueno incluir una variable de entorno para no poner las credenciales
  var client = new MongoClient(url,{useNewUrlParser:true});
  //Seria bueno no utilizar var en general, usar let/const

  client.connect(function(err) {

    if (err) throw err;

    console.log("Conectado con mongo");
    var db = client.db("amercar");
    var colComment = db.collection("usuarios");

    callback(colComment, client);
  });
}

function connectProducto(callback){
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb+srv://daniel:dard98031160243@amercar-p9oq8.mongodb.net/test?retryWrites=true&w=majority";
  var client = new MongoClient(url,{useNewUrlParser:true});

  client.connect(function(err) {

    if (err) throw err;

    console.log("Conectado con mongo");
    var db = client.db("amercar");
    var colComment = db.collection("producto");

    callback(colComment, client);
  });
}

function readProductos(resolve, reject){
  connectProducto(function(colProds, client){
    colProds.find({}).limit(12).toArray(
      (err, productos) => {
        if (err) {
          reject(err);
          throw err;
        }
        resolve(productos);

        client.close();
      });
  });
}

function crearUsuario(content){
  connectUsuarios(function(colUsuario, client){
    colUsuario.insertOne(content, function(err){
      if(err) throw err;
      console.log("Inserto el usuario");
      client.close();
    });
  });
}

/* GET home page. */
router.get("/data", function(req, res) {

  readProductos(
    (prodcutos) => res.json(prodcutos),
    (err) => res.send(err)
  );

});

/* Post Usuarios*/
router.post("/crearUsuario", function(req) {
  let data = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    contrasena: req.body.contrasena,
    direccion: req.body.dir,
    cedula: req.body.cedula,
    telefono: req.body.telefono
  };

  crearUsuario(data, res =>  res.send("/"));

  console.log("Record inserted succesfuly", data);
});

module.exports = router;
