const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
var data = require('./data.js');

const app = express();

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// app.get('/', function(req, res) {
//   res.send('HELLO');
// });

app.get('/directory', function(req, res) {
  // res.send('HELLO');
  // console.log(data);

    console.log(data);

  res.render('directory', data);
});

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
