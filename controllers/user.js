const LikedDish = require('../models/liked-dish');
const Dish = require('../models/dish');


exports.getAddDish = (req, res, next) => {
    res.render('user/edit-dish', {
        pageTitle: 'Thêm món ăn',
        path: '/add-dish',
        editing: false
    })  
};

exports.postAddDish = (req, res, next) => {
    // const dish = new Dish(req.body.name, req.body.image, req.body.ingredients, req.body.steps, req.body.requirement);
    const name = req.body.name;
    const image = req.body.image;
    const ingredients = req.body.ingredients;
    const steps = req.body.steps;
    const requirement = req.body.requirement;
    const dish = new Dish (null, name, image, ingredients, steps, requirement);
    dish.save();
    res.redirect('/');
};

exports.getEditDish = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode){
        return res.redirect('/');
    }

    const dishId1 = req.params.dishId;
    Dish.findById(dishId1, dish => {
        if (!dish){
            return res.redirect('/');
        }
        res.render('user/edit-dish', {
            pageTitle: 'Sửa món ăn',
            path: '/edit-dish',
            editing: editMode,
            dish1: dish,
            ingredientsArray: JSON.parse(dish.ingredients)
        });  
    });
};

exports.postEditDish = (req, res, next) => {
    const dishId1 = req.body.dishId;
    const updatedName = req.body.name;
    const updatedImage = req.body.image;
    const updatedIngredients = req.body.ingredients;
    const updatedSteps = req.body.steps;
    const updatedRequirement = req.body.requirement;
    const updatedDish = new Dish(dishId1, updatedName, updatedImage, updatedIngredients, updatedSteps, updatedRequirement);
    updatedDish.save();
    res.redirect('/shared-dish');
}

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
    Dish.fetchAll(dishes => {
        res.render('user/shared-dish', {
            pageTitle: 'Món ăn đã chia sẻ',
            dishes1: dishes,
            hasDishes: dishes.length > 0,
            path: '/shared-dish'
        })
    });
};

exports.getProfile = (req, res, next) => {
    res.render('user/profile', {
        pageTitle: 'Trang cá nhân',
        path: '/profile'
    })  
};
