var express = require('express');
var router = express.Router();
var parseString = require('xml2js').parseString;
/* GET home page. */

router.get('/', function(req, res, next) {
  res.json({"message": "hello!"});
});
router.get('/test', function(req,res,nex){
    //var parser = new xml2js.Parser();
    //fs.readFile('/public/xml/test.xml', function(err, data) {
    //    parser.parseString(data, function (err, result) {
    //        console.dir(result);
    //        console.log('Done');
    //    });
    //});
    var xml = "<root>Hello xml2js!</root>"
    parseString(xml, function (err, result) {
        console.dir(result);
        res.json(result);
});
});


module.exports = router;
