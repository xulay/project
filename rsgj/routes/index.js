var express = require('express');
var getItemById = require('../data/product').getItemById;
var getAboutById = require('../data/about').getAboutById;
var getAppById = require('../data/appCase').getAppById;
var getInfoById = require('../data/info').getInfoById;
var getRecruitById = require('../data/recruit').getRecruitById;

var getProductList = require('../data/productList').getProductList;



var router = express.Router();

/* GET home page. */
router.use(function (req,res,next) {
    res.locals.partials = {
        header:'header',
        bottom:'bottom',
        appCaseNav:'appcase-nav',
    }
    res.locals.scripts = [];
    res.locals.links = [];
    next();
})
router.get('/', function(req, res, next) {
    res.locals.partials.content="index";
    res.locals.title="首页";
    res.render('layout');
});

router.get('/about', function(req, res, next) {
    res.locals.partials.content="about";
    res.locals.title="关于我们";
    res.locals.scripts = ['/js/jquery.lightbox-0.5.min.js']
    res.render('layout');
});

router.get('/aboutDetails/:id', function(req, res, next) {
    var id =req.params.id;
    res.locals.partials.content="aboutDetails";
    res.locals.data=getAboutById(id);
    res.render('layout');
});

router.get('/productList', function(req, res, next) {
    res.locals.partials.content="productList";
    res.locals.title="产品简介";
    res.locals.list=getProductList;
    res.render('layout');
});

router.get('/product/:id', function(req, res, next) {
    var id =parseInt(req.params.id);
    res.locals.partials.content="product";
    res.locals.data=getItemById(id);
    res.render('layout');
});

router.get('/appCase/:id', function(req, res, next) {
    res.locals.partials.content="appCase";
    var id = req.params.id;
    res.locals.data=getAppById(id);
    res.locals.scripts = ['/js/jquery.lightbox-0.5.min.js']
    res.render('layout');
});

// router.get('/appCaseLT', function(req, res, next) {
//     res.locals.partials.content="appCaseLT";
//     res.locals.title="应用案例";
//     res.render('layout');
// });

router.get('/infoList', function(req, res, next) {
    res.locals.partials.content="infoList";
    res.locals.title="木业知识";
    res.render('layout');
});

router.get('/info/:id', function(req, res, next) {
    var id =parseInt(req.params.id);
    res.locals.partials.content="info";
    res.locals.data=getInfoById(id);
    res.render('layout');
});

router.get('/recruit', function(req, res, next) {
    res.locals.partials.content="recruit";
    res.locals.title="人才招聘";
    res.render('layout');
});

router.get('/recruitDetail/:id', function(req, res, next) {
    var id =parseInt(req.params.id);
    res.locals.partials.content="recruitDetail";
    res.locals.data=getRecruitById(id);
    res.render('layout');
});

router.get('/contact', function(req, res, next) {
    res.locals.partials.content="contact";
    res.locals.title="联系我们";
    res.render('layout');
});

router.get('/productSearch', function(req, res, next) {
    res.locals.partials.content="productSearch";
    res.locals.title="搜索";
    res.render('layout');
});



// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
