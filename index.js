
var express = require('express');
var app = express();
const path =require('path');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+ '/'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
//l

// index page
// app.get('/', function(req, res) {
//   res.render('index.ejs');
// });
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, './connexion.html'));
});
// about page
// app.get('/catalogue', function(req, res) {
//   res.render('catalogue.ejs');
// });
// app.listen('3000',()=>{
//     console.log("Serveur 3000");
// })
let port=4000;
app.listen(port, '0.0.0.0',()=>{
  console.log(port);
});