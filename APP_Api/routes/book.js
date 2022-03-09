var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

var ctrlBook = require('../controller/book');

//localhost:3000/api/list
//localhost:3000/api/singleitem
//localhost:3000/api/create
//localhost:3000/api/delete
//localhost:3000/api/update
router.get('/books', ctrlBook.getBooks)
router.get('/books/:bookid', ctrlBook.getSingleBook)
router.post('/create', ctrlBook.createBook)
router.delete('/delete', ctrlBook.deleteBook)
router.put('/update', ctrlBook.updateBook)
//router.get

module.exports = router;