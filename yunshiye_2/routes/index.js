var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function (req,res,next) {
    res.locals.partials = {
        header:'header',
        navBottom:'nav-bottom',
    }
    res.locals.scripts = [];
    res.locals.links = [];
    next();
})

router.get('/', function(req, res, next) {
    res.locals.partials.content="index";
    res.locals.title="首页";
    res.locals.navIndex='0';
    res.locals.links = ["css/index.css"];
    res.render('layout');
});

router.get('/about', function(req, res, next) {
    res.locals.partials.content="about";
    res.locals.title="关于我们";
    res.locals.navIndex='1';
    res.render('layout');
});

router.get('/Products-News', function(req, res, next) {
    res.locals.partials.content="Products-News";
    res.locals.title="产品动态";
    res.locals.navIndex='2';
    res.render('layout');
});

router.get('/solution', function(req, res, next) {
    res.locals.partials.content="solution";
    res.locals.title="解决方案";
    res.locals.navIndex='3';
    res.render('layout');
});

router.get('/caseapp', function(req, res, next) {
    res.locals.partials.content="caseapp";
    res.locals.title="案例中心";
    res.locals.navIndex='4';
    res.locals.scripts = ["js/page.js","js/caseapp.js","js/lightbox-plus-jquery.min.js"];
    res.render('layout');
});

router.get('/new', function(req, res, next) {
    res.locals.partials.content="new";
    res.locals.title="新闻资讯";
    res.locals.navIndex='5';
    res.locals.scripts=["js/page2.js","js/new.js"];
    res.render('layout');
});

router.get('/talent-center', function(req, res, next) {
    res.locals.partials.content="talent-center";
    res.locals.title="人才中心";
    res.locals.navIndex='6';
    res.render('layout');
});

router.get('/contact-us', function(req, res, next) {
    res.locals.partials.content="contact-us";
    res.locals.title="联系我们";
    res.locals.navIndex='7';
    res.locals.scripts=["//webapi.amap.com/maps?v=1.3&key=8325164e247e15eea68b59e89200988b","js/contact-us.js"];
    res.render('layout');
});

router.get('/intemet-application', function(req, res, next) {
    res.locals.partials.content="intemet-application";
    res.locals.title="互联网应用";
    res.locals.navIndex='2';
    res.render('layout');
});

router.get('/WeChat-development', function(req, res, next) {
    res.locals.partials.content="WeChat-development";
    res.locals.title="微信开发";
    res.locals.navIndex='3';
    res.render('layout');
});

router.get('/app-exploit', function(req, res, next) {
    res.locals.partials.content="app-exploit";
    res.locals.title="APP开发";
    res.locals.navIndex='3';
    res.render('layout');
});

router.get('/E-commerce', function(req, res, next) {
    res.locals.partials.content="E-commerce";
    res.locals.title="电商系统开发";
    res.locals.navIndex='3';
    res.render('layout');
});

router.get('/case', function(req, res, next) {
    res.locals.partials.content="case";
    res.locals.title="微信开发";
    res.locals.navIndex='4';
    res.locals.scripts = ["js/page.js","js/case.js"];
    res.render('layout');
});

module.exports = router;
