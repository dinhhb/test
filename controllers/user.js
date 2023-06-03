const LikedDish = require('../models/liked-dish');
const Dish = require('../models/dish');

exports.getComment = (req, res, next) => {
    res.render('user/comment', {
        pageTitle: 'Bình luận',
        path: '/comment'
    })  
};

exports.getLikedDish = (req, res, next) => {
    res.render('user/liked-dish', {
        pageTitle: 'Món ăn yêu thích',
        path: '/liked-dish'
    })  
};

exports.postLikedDish = (req, res, next) => {
    const dishId1 = req.body.dishId;
    Dish.findById(dishId1, dish => {
        LikedDish.addDish(dishId1);
    });
    res.redirect('/liked-dish');
};

exports.getSharedDish = (req, res, next) => {
    res.render('user/shared-dish', {
        pageTitle: 'Món ăn đã chia sẻ',
        path: '/shared-dish'
    })  
};

exports.getProfile = (req, res, next) => {
    res.render('user/profile', {
        pageTitle: 'Trang cá nhân',
        path: '/profile'
    })  
};
