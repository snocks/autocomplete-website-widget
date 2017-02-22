
var http = require('http');
console.log("1");
var router = require('./router.js');
console.log("3");

http.createServer(function(req, res) {
    var path = req.method + ' ' + req.url;
    router[path](req, res);

}).listen(process.env.PORT || 8080, function() {
    console.log('Listening on 8080');
});
