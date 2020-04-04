const db = require('../db');
const shortid = require('shortid');

module.exports.root = (req, res) => {
    res.render('index', { users: db.get('data').value() });
};

module.exports.search = (req, res) => {
    var q = req.query.q;
    var dataFilter = db.get('data').value().filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1 || user.phone.indexOf(q) !== -1 ;
    });
    res.render('index', { users: dataFilter });
};

module.exports.create = (req, res) => {
    res.render('create');
};

module.exports.viewProfile =  (req, res)=>{
  var id = req.params.id;
  var user = db.get('data').find({id: id}).value();
  res.render('viewProfile',{users: user});
};

module.exports.postCreate = (req, res) => {
    var errors = [];
    if(!req.body.name){
      errors.push('Name is required !')
    }
    
    if(!req.body.phone){
      errors.push('Phone is required !')
    }
    if(errors.length){
      res.render('create',{ errors: errors, values: req.body })
      return;
    }

    req.body.id = shortid.generate();
    db.get('data').push(req.body).write();
    res.redirect('/users');
};