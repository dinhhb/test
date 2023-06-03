exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Đăng nhập',
        path: '/login'
    })  
};

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        pageTitle: 'Đăng ký',
        path: '/signup'
    })  
};

