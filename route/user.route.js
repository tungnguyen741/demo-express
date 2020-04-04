const express = require('express');
const router = express.Router();

var controller = require('../controllers/user.controller');
var validateCreate = require('../middleWare_Validate/create.validate');
//render Users
router.get('/', controller.root);
//render Searched
router.get('/search', controller.search);
//render Create
router.get('/create', controller.create);
//render View Profile
router.get('/:id', controller.viewProfile);
//Post data
router.post('/create',validateCreate.postCreate ,controller.postCreate);

module.exports = router;