const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view enigine', 'mustache');

app.get('/directory/', function(req, res) {

});

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
