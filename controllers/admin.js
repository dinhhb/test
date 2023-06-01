const Dish = require('../models/dish');

exports.getDishManagement = (req, res, next) => {
    // res.render('admin/dish-management', {
    //     // pageTitle: 'Shop',
    //     path: '/dish-management'
    // })  
    Dish.fetchAll(dishes => {
        res.render('admin/dish-management', {
            // pageTitle: 'Shop',
            dishes1: dishes,
            hasDishes: dishes.length > 0,
            path: '/dish-management'
        })
    });
};

exports.getDishVerification = (req, res, next) => {
    res.render('admin/dish-verification', {
        // pageTitle: 'Shop',
        path: '/dish-verification'
    })  
};

exports.getAccountManagement = (req, res, next) => {
    res.render('admin/account-management', {
        // pageTitle: 'Shop',
        path: '/account-management'
    })  
};