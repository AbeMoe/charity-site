const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");


var https = require('https');
var fs = require('fs');

const KEY_PATH = "/opt/bitnami/letsencrypt/certificate/"

var privateKey = fs.readFileSync( KEY_PATH+'battleroyaleboston.com.key' );
var certificate = fs.readFileSync( KEY_PATH+'battleroyaleboston.com.crt' );




const path = __dirname + '/app/dist/'


const app = express();



app.use(express.static(path));



var corsOptions = {

	  origin: "http://localhost:8081"

};



app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));





app.get('/', function (req,res) {

	  res.sendFile(path + "index.html");

});





// set port, listen for requests

 const PORT = process.env.PORT || 443;

 https.createServer({
  key: privateKey,
  cert: certificate
}, app).listen(PORT);

 app.listen(80, () => {

   console.log(`Server is running on port 80.`);

});
