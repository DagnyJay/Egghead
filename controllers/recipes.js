const Recipe = require('../models/recipe');

module.exports = {
    index,
    show,
    new: newRecipe,
    create, 
    edit
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
    res.render('recipes/edit', {
        recipe: Recipe.findOne(req.params.id),
        idx: req.params.id
    });
}