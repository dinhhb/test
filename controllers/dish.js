const Dish = require('../models/dish');

exports.getAddDish = (req, res, next) => {
    res.render('user/add-dish', {
        // pageTitle: 'Shop',
        path: '/add-dish'
    })  
};

exports.postAddDish = (req, res, next) => {
    // const dishData = {
    //     name: req.body.name,
    //     image: req.body.image,
    //     ingredients: req.body.ingredients,
    //     steps: req.body.steps,
    //     requirement: req.body.requirement
    //   };
    //   console.log(dishData);
    //   console.log(req.body.ingredients);
    const dish = new Dish(req.body.name, req.body.image, req.body.ingredients, req.body.steps, req.body.requirement);
    dish.save();
    res.redirect('/');
};

exports.getDishes = (req, res, next) => {
    Dish.fetchAll(dishes => {
        res.render('main-page/main-page', {
            // pageTitle: 'Shop',
            dishes1: dishes,
            hasDishes: dishes.length > 0,
            path: '/'
        })
    });
};

// exports.getMainPage = (req, res, next) => {
//     res.render('main-page/main-page', {
//         // pageTitle: 'Shop',
//         path: '/'
//     })  
// };

exports.getDishDetail = (req, res, next) => {
    res.render('main-page/dish-detail', {
        // pageTitle: 'Shop',
        path: '/dish-detail'
    })  
}