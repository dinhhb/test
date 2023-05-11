exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        // pageTitle: 'Shop',
        path: '/login'
    })  
};

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        // pageTitle: 'Shop',
        path: '/signup'
    })  
};

