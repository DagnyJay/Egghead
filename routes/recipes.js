var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');

router.get('/', recipesCtrl.index);
router.get('/new', isLoggedIn, recipesCtrl.new);
router.get('/:id', recipesCtrl.show);
router.get('/:id/edit', isLoggedIn, recipesCtrl.edit);

router.post('/', isLoggedIn, recipesCtrl.create);

router.put('/:id', isLoggedIn, recipesCtrl.update);

router.delete('/:id', isLoggedIn, recipesCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;