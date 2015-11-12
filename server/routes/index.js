var express = require('express');
var router = express.Router();

var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/wednesday_challenge');
mongoose.model('Person', new Schema({"name": String, "location": String, "favorite_number": Number}));
var Person = mongoose.model('Person');

router.get('/people', function(req, res){
    console.log("data upload request. Data is: ", req.body);
   Person.find({}, function(err, data){
       if (err) {
           console.log("Error retrieving data from database: ", err);
           res.send("Did you receive?");
       }
   });
});

router.get('/*', function(req, res){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file))
});

module.exports = router;