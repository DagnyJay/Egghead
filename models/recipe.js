const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    googleId: String,
    content: String,
    rating: {type: Number, min: 1, max: 5}, 
}, {
    timestamps: true
});

const recipeSchema = new Schema({
    title: {type: String, required: true},
    keyIngredient: {type: String, required: false},
    ingredients: {type: String, required: false},
    instructions: {type: String, required: false},
    img: {data: Buffer, contentType: String, required: false},
    servings: {type: Number, required: false, min: 1, max: 20},
    prepTime: {type: String, required: false},
    cookTime: {type: String, required: false},
    comments: [commentSchema]
});

module.exports = mongoose.model('Recipe', recipeSchema);
