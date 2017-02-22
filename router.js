
module.exports = {
    'GET /': require('./app/form.js'),
    'GET /style.css': require('./app/style.js'),
    'GET /request.js': require('./front-end/request.js'),
    'POST /findword' : require('./app/code.js'),

};
