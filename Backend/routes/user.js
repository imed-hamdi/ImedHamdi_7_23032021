'use strict';
const auth = require('../middelware/auth');
const validityUser = require('../middelware/validityUser');
const passwordupdate = require('../middelware/passwordupdate');
const router = require('express').Router();
const userController = require('../controllers/user');
router.get('/', auth, userController.findAll);
router.post('/auth', validityUser, userController.Signup);
router.post('/login', validityUser, userController.login);
router.put('/:id',auth,passwordupdate, userController.update);
router.delete('/:id',auth, userController.delete);
router.get('/:id',auth, userController.findById);



module.exports = router;