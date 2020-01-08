'use strict';

var homeController = require('./home/homeController');
var categoryController = require('./category/categoryController');
var shopController = require('./shop/shopController');
var singleController = require('./single/singleController');

angular.module('App.components', [])
    .controller('HomeController', homeController)
    .controller('CategoryController', categoryController)
    .controller('ShopController', shopController)
    .controller('SingleController', singleController)

    .name;