var mongoose = require('mongoose');
var Book = mongoose.model('Book');

const getBooks = function(req, res){

    Book
        .find()
        .exec(function(err, bookdata){
            console.log(err, bookdata)
            if(err){
                res
                    .status(404)
                    .json(err)
                return;
            }
            res
                .status(200)
                .json(bookdata)
        })
}
const getSingleBook = function(req, res){

    var id = req.params.bookid;
    Book
        .findById(id)
        .exec(function(err, bookdata){
            console.log(err, bookdata)
            if(err){
                res
                    .status(404)
                    .json(err)
                return;
            }
            res 
                .status(200)
                .json(bookdata)
        })
}
const createBook = function(req, res){
    console.log(req.body);
    Book
        .create(req.body, function(err, bookdata){
            if(err){
                res
                    .status(404)
                    .json(err)
                return;
            }
            res
                .status(200)
                .json(bookdata)
        })

}
const deleteBook = function(req, res){
    const bookid = req.params.bookid;
    if(bookid){
        Book
            .findByIdAndRemove(bookid)
            .exec((err, bookdata) => {
            if(err){
                res
                    .status(404)
                    .json(err);
                return;
            }
            res
                .status(200)
                .json(null);
            })
    }   else{
            res
                .status(404)
                .json({"message": "No bookid"})

    }

}
const updateBook = function(req, res){
   if(!req.params.bookid){
       res
        .status(404)
        .json({"Message": "Not found, bookid is required"});
    return;
   }
   Book.findById(req.params.bookid)
    .exec((err, bookdata) => {
        if(!bookdata){
            res
                .status(404)
                .json({"Meassage": "bookid not found"});
            return;
        }   else if(err){
            res
                .status(404)
                .json(err);
            return;
        }
        bookdata.title = (req.body.title === "") ? bookdata.title : req.body.title;
        bookdata.author = req.body.author;
        bookdata.save((err, bookdata) => {
            if(err){
                res
                    .status(404)
                    .json(err);
            }   else{
                res
                    .status(200)
                    .json(bookdata);  
            }
        })
    })
}

module.exports = {
    getBooks, getSingleBook, createBook, deleteBook, updateBook
}