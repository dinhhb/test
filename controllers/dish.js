const Dish = require('../models/dish');

exports.getAddDish = (req, res, next) => {
    res.render('user/add-dish', {
        // pageTitle: 'Shop',
        path: '/add-dish'
    })  
};

exports.postAddDish = (req, res, next) => {
    const dishData = {
        name: req.body.name,
        image: req.body.image,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        requirements: req.body.requirement
      };
      console.log(dishData);
    //   console.log(req.body.ingredients);
    res.redirect('/');
};

exports.getDishes = (req, res, next) => {
    // Dish.fetchAll(dishes => {
    //     res.render("shop", {
    //         prods: products,
    //         pageTitle: "Shop",
    //         path: "/",
    //         hasProducts: products.length > 0,
    //         activeShop: true,
    //         productCSS: true,
    //       });
    // });
    res.render('main-page/main-page', {
                // pageTitle: 'Shop',
                path: '/'
    })
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