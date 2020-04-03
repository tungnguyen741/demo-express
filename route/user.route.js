const express = require('express');
const router = express.Router();

var controller = require('../controllers/user.controller');
//render Users
router.get('/', controller.root);
//render Searched
router.get('/search', controller.search);
//render Create
router.get('/create', controller.create);
//render View Profile
router.get('/:id', controller.viewProfile);
//Post data
router.post('/create', controller.postCreate);

module.exports = router;