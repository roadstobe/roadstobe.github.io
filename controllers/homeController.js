exports.index = function (request, response) {
    response.render('home', {
        title: 'Home',
        isHome: true
    })
};
