"use strict";
var express = require('express');
var models_1 = require('./models');
var app = express();
console.log(models_1.Location);
app.get('/', function (request, response) {
    response.send('hi');
});
app.listen(process.env.PORT || 3000, function () {
    console.log("I'm running");
});
