const Dish = require('../models/dish');

exports.getAddDish = (req, res, next) => {
    res.render('user/edit-dish', {
        pageTitle: 'Thêm món ăn',
        path: '/add-dish',
        editing: false
    })  
};

exports.postAddDish = (req, res, next) => {
    const dish = new Dish(req.body.name, req.body.image, req.body.ingredients, req.body.steps, req.body.requirement);
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
            dish1: dish
        });  
    });
};

exports.getDishes = (req, res, next) => {
    Dish.fetchAll(dishes => {
        res.render('main-page/main-page', {
            pageTitle: 'Ẩm thực việt',
            dishes1: dishes,
            hasDishes: dishes.length > 0,
            path: '/'
        })
    });
};

exports.getDish = (req, res, next) => {
    const dishId1 = req.params.dishId;
    Dish.findById(dishId1, dish => {
        res.render('main-page/dish-detail', {
            // pageTitle: 'Shop',
            dish1: dish,
            path: '/dish-detail'
        })      
    });
};

// exports.getDishDetail = (req, res, next) => {
//     res.render('main-page/dish-detail', {
//         // pageTitle: 'Shop',
//         path: '/dish-detail'
//     })  
// }