var express = require('express');
var router = express.Router();
var database = require('../database');

/* GET home page. */


router.get('/', function(req, res, next) {
  res.json({"message": "hello!"});
});

router.get('/test', function(req,res){
    var client = database.newDbConnection();
    client.connect(function(err, res){
            if (err){
                console.log(err);
                return false;
            } else {
                console.log('connected to database');
                console.log(this);
                return this;
            }
        });
    var query = client.query("select * from employee");
    query.on("row", function (row, result) {
        result.addRow(row);
    });
    query.on("end", function (result) {
        client.end();
        //res.writeHead(200, {'Content-Type': 'text/plain'});
        res.json(JSON.stringify(result.rows));
        res.end();
    });
});

router.post('/add', function(req, res){
    //var firstname = req.params.name,
    //   lastname = req.params.lastname,
    //   email = req.params.email;
    //var params = { host: 'ec2-54-204-35-248.compute-1.amazonaws.com',user: 'zbyaijobrllldi',password: 'CM9bfuXhyaY4YjmIkQg9F-zJC2',database: 'd33e0sfetbpcpm',ssl: true };
    //var client = new pg.Client(params);
    //client.connect(function(err, res){
    //    if (err){
    //        console.log(err);
    //    } else {
    //        console.log('connected to database');
    //    }
    //});
    //firstname lastname email
    //try {
    //    var query = client.query("INSERT INTO employee (firstname, lastname, email) values ('"+firstname+"','"+lastname+"','"+email+"');");
    //    query.on('end', function(){
    //        console.log("added to database");
    //        client.end();
    //        res.json({'status':'success'});
    //    });
    //} catch (e) {
    //    console.log(e);
    //}
    res.json({"asd":"asd"});
});

module.exports = router;