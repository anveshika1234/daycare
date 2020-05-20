var express=require("express");
var bodyParser=require('body-parser');
 

var app = express();
 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
 

/* route to handle login and registration */


app.listen(8012);
