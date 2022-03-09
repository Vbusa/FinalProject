var express = require('express');
var router = express.Router();
const ctrlMain= require("../controller/main");
const ctrlAbout= require("../controller/about");
const ctrlBook= require("../controller/book");

/* GET home page. */
router.get('/', ctrlBook.booklist)
router.get('/books/:bookid', ctrlBook.bookInfo)
//router.get('/list', ctrlbook.list)

router.route('/create')
    .get(ctrlBook.addNewBook)
    .post(ctrlBook.doAddNewBook)

module.exports = router;
    