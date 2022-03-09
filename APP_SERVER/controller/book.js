//const { response } = require("express");
const request = require("request");
const apiOptions = {
    server: "http://localhost:3000"
}



//var bookArray = [
  //  {'title': "Harry Potter", 'author': "J.K.Rowlings"},
   // {'title': "Half Girlfriend", 'author': "Chetan Bhagat"},
   // {'title': "Hamlet", 'author': "William Shakespeare"}
//]

const booklist = function(req, res){
    const path = "/api/books";
    const requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    }
    request(
    requestOptions,
    (err, response, body) => {
        _renderHomePage(req, res, body);
    })
}
const _renderHomePage = function(req, res, responseBody){
    console.log(responseBody);
    res.render("list-display",{
        books: responseBody
    })
}

const bookInfo = function(req, res){
    const path = `/api/books/${req.params.bookid}`;
    const requestOptions = {
        url: apiOptions.server +path,
        method: "GET",
        json: {}
    }
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    )
}
const _renderDetailPage = function(req, res, responseBody){
    console.log(responseBody);
    res.render("details", {
        currentBook: responseBody
    })
}


const _renderCreatePage = function(req, res){
    res.render('create', {
        title: "Create New Book"
    })
}
const addNewBook = function(req, res){
    _renderCreatePage(req, res);
}
const doAddNewBook = function(req, res){
    const path = '/api/books';
    const postdata = {
        title: req.body.title,
        author: req.body.author
    }
    const requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json: postdata
    }
    request(
    requestOptions,
    (err, response, body) => {
        if(response.statusCode === 201){
            res.redirect('/');
        }
    }
    )
}

module.exports={
    booklist, bookInfo, doAddNewBook, addNewBook
};