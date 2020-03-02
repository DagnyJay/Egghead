const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: googleId,
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    }, {
        timestamps: true
});

const recipeSchema = new Schema({
    title: {type: String, required: true},
    ingredients: {type: Array, required: true},
    instructions: {type: String, required: true},
    img: {data: Buffer, contentType: String, required: false},
    servings: {type: Number, required: true},
    prepTime: {type: String, required: true},
    cookTime: {type: String, required: true},
    comments: [commentsSchema]
});