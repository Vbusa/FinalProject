const index = function(req, res){
    res.render('index', {title: 'Book Store'});
};
module.exports={
    index
};  