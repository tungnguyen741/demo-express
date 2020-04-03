const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//use Low DB to save Data 
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const shortid = require('shortid');
db = low(adapter)

// Set some defaults
db.defaults({
    data: []
}).write();
//POST Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//Use Pug
app.set('view engine', 'pug');
app.set('views', 'C:\\xampp\\htdocs\\demo_ExpressJs\\demo-express\\views');

//render Users
app.get('/users', (req, res) => {
    res.render('index', { users: db.get('data').value() });
});
//render Searched
app.get('/users/search/', (req, res) => {
    var q = req.query.q;
    var dataFilter = db.get('data').value().filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    res.render('index', { users: dataFilter });
});
//render Create
app.get('/users/create/', (req, res) => {
    res.render('create');
});
//render View Profile
app.get('/users/:id', (req, res)=>{
  var id = req.params.id;
  var user = db.get('data').find({id: id}).value();
  res.render('viewProfile',{users: user});
});
//Post data
app.post('/users/create/', (req, res) => {
    req.body.id = shortid.generate();
    db.get('data').push(req.body).write();
    res.redirect('/users');
});
app.listen(8080, (req, res) => {
    console.log('ok fine');
});