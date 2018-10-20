'use strict'

const express = require('express'),
      payment = require('./payment');


const app = express();


// insert view-engine ejs

//app.use(require('payment.js'));
app.set('view engine', 'ejs');

app.get('/:id', function (req, res) {
    res.render('textbook');
})

app.get('/', function (req, res) {
    payment.run();

    res.send("WORKS");
});


app.listen(3000, function () {
    console.log("Listening on port 3000");
});
