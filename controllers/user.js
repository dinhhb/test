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

exports.getAddDish = (req, res, next) => {
    res.render('user/add-dish', {
        // pageTitle: 'Shop',
        path: '/add-dish'
    })  
};