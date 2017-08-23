const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
var data = require('./data.js');

const app = express();

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get('/', function(req, res) {
  res.render('directory', data);
});

app.get('/:id', function(req, res) {
  var user = {};
  for (var i = 0; i < data.users.length; i++) {
    user = data.users[i];
    if (user.id == req.params.id) {
      break;
    }
  }
  res.render('profile', user);
});

app.listen(3000, function() {
  console.log('Successfully started express application!');
});
