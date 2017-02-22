var fs = require('fs');
var form = fs.readFileSync(__dirname + '/../view/form.html', 'utf8');
module.exports = function(req, res) {
    console.log("4");
    res.end(form);
};
