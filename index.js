var http = require('http');
var router = require('./router.js');

http.createServer(function(req, res) {
	var path = req.method + ' ' + req.url;

	router[path](req,res);

}).listen(process.env.PORT || 8080, function() {
    console.log('Listening on 8880');

});
