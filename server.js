const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('./config/db')

var app = express();

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', require('./routes/api'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

var port = 3001;
app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
})