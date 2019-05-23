const express=require("express");
const app=express();
var  bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static(__dirname+'/site'));
app.get('/', function(req,res){
    console.log("home");

});
app.get('/generadorBoletadepagos',function(req,res){
    console.log("get boletadepagos");
});
app.get('/generadorBoletadepagos',function(req,res){
    console.log("get boletadepagos");
});
app.listen(7000);