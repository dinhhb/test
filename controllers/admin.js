exports.getDishManagement = (req, res, next) => {
    res.render('admin/dish-management', {
        // pageTitle: 'Shop',
        path: '/dish-management'
    })  
};
