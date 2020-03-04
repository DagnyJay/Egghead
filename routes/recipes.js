var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');

router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);
router.get('/:id', recipesCtrl.show);
router.get('/:id/edit', recipesCtrl.edit);

router.post('/', recipesCtrl.create);

module.exports = router;