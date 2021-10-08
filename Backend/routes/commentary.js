'use strict';

const router = require('express').Router();
const commentaryController = require('../controllers/commentary');
router.get('/', commentaryController.findAll);
router.post('/', commentaryController.create);
router.delete('/:id', commentaryController.delete);
module.exports = router;