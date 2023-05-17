exports.getComment = (req, res, next) => {
    res.render('user/comment', {
        // pageTitle: 'Shop',
        path: '/comment'
    })  
};

exports.getLikedDish = (req, res, next) => {
    res.render('user/liked-dish', {
        // pageTitle: 'Shop',
        path: '/liked-dish'
    })  
};

exports.getSharedDish = (req, res, next) => {
    res.render('user/shared-dish', {
        // pageTitle: 'Shop',
        path: '/shared-dish'
    })  
};

exports.getProfile = (req, res, next) => {
    res.render('user/profile', {
        // pageTitle: 'Shop',
        path: '/profile'
    })  
};
