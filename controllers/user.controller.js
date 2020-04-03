const db = require('../db');

module.exports.root = (req, res) => {
    res.render('index', { users: db.get('data').value() });
};

module.exports.search = (req, res) => {
    var q = req.query.q;
    var dataFilter = db.get('data').value().filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    res.render('index', { users: dataFilter });
}

module.exports.create = (req, res) => {
    res.render('create');
}

module.exports.viewProfile =  (req, res)=>{
  var id = req.params.id;
  var user = db.get('data').find({id: id}).value();
  res.render('viewProfile',{users: user});
}

module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate();
    db.get('data').push(req.body).write();
    res.redirect('/users');
}