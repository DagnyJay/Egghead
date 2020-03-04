const Recipe = require('../models/recipe');

module.exports = {
    index,
    show,
    new: newRecipe,
    create, 
    edit,
    update
};

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', { title: 'All Recipes', recipes});
    });
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'Add Recipe' });
}

function create(req, res) {
    Recipe.create(req.body, function(err, recipe) {
        if (err) return res.redirect('/recipes/new');
        res.redirect(`/recipes/${recipe._id}`);
    });
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', {
            title: 'Recipe Detail',
            recipe
        });
    });
}

function edit(req, res) {
    Recipe.findById(req.params.id, function (err, recipe) {
        res.render('recipes/edit', {
            recipe,
            idx: req.params.id
        });
    })
}

function update(req, res) {
    Recipe.update(req.body, function (err) {
        if (err) return res.redirect('recipes/edit');
        res.redirect(`/recipes/${req.params.id}`);
    });
}