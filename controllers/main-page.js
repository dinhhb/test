exports.getMainPage = (req, res, next) => {
    res.render('main-page/main-page', {
        // pageTitle: 'Shop',
        path: '/'
    })  
};

exports.getDishDetail = (req, res, next) => {
    res.render('main-page/dish-detail', {
        // pageTitle: 'Shop',
        path: '/dish-detail'
    })  
}
  