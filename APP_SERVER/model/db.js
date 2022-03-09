var mongoose = require("mongoose");

var Book = require('./book');

var dburi ="mongodb+srv://AchyuthReddy:Achyuth77@cluster0.ktwcx.mongodb.net/Bookdb?retryWrites=true&w=majority";
mongoose.connect(dburi, {dbName: 'bookDB'});

mongoose.connection.on('connected', function(){
    console.log("database bookdb connected successfully");
});
mongoose.connection.on('error', function(){
    console.log("database connection error");
});
mongoose.connection.on('disconnected', function(){
    console.log("database disconnected");
});

require('./book')

/* var Book = require('./book')
var Blog = {
    article: "Philosopher's Stone",
    pageno: 77
}

Book.bookModel.create({
    title: "Harry potter",
    author: "J.K.Rowling",
    details: [Blog]
}, function(error, Book){
    console.log(error, Book);
}) */

