fs = require('fs')
module.exports = {
    'GET /': require('./app/form.js'),
    'GET /style.css': function(req, res) {
        res.writeHead(200, { 'Content-type': 'text/css' });
        var fileContents0 = fs.readFileSync('./view/style.css', { encoding: 'utf8' });
        res.write(fileContents0);
        res.end();
    },
    'GET /utils.js': function(req, res) {
        res.writeHead(200, { 'Content-type': 'text/javascript' });
        var fileContents1 = fs.readFileSync('./utils.js', { encoding: 'utf8' });
        res.write(fileContents1);
        res.end();
    }
}
