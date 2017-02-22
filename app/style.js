var fs = require('fs');
module.exports = function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/css'
    });
    var fileContents = fs.readFileSync('./view/style.css', { encoding: 'utf8' });
    res.write(fileContents);
    res.end();
};
