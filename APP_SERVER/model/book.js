var mongoose = require("mongoose")

/* var Blog = new mongoose.Schema({
    article: {type: String, required: true},
    pageno: {type: Number, required: true, min: 1, max: 400},
}) */

var bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    //details: Blog
})

var bookModel = mongoose.model("Book", bookSchema, "book");

module.exports ={
    bookModel
}