import angular from 'angular';

import '../style/app.css';
import '../style/style.css';
import '../style/bootstrap.css';
import '../style/dark.css';
import '../style/font-icons.css';
import '../style/animate.css';
import '../style/magnific-popup.css';
import '../style/swiper.css';
import '../style/ecommerce.css';
import '../style/ecommerce-fonts.css';
import '../style/responsive.css';
import '../style/custom.css';

require('./components');
require('./shared');

const MODULE_NAME = 'app';

var appModule = angular.module(MODULE_NAME, ['App.components', 'App.shared', 'ui.router']);

appModule.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

appModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
          template: require('./components/home/home.html'),
          controller: 'HomeController',
          url: '/'
      })
      .state('about-cr-sadler', {
          templateUrl: 'client/app/components/about/about.html',
          controller: 'AboutController',
          url: '/about-cr-sadler'
      })
      .state('shop', {
          template: require('./components/shop/shop.html'),
          controller: 'ShopController',
          url: '/shop'
      })
      .state('category', {
          template: require('./components/category/category.html'),
          controller: 'CategoryController',
          url: '/shop/:category',
          params: {
            category: null,
            id: null
          }
      })
      .state('single', {
          template: require('./components/single/single.html'),
          controller: 'SingleController',
          url: '/shop/:category/:product',
          params: {
            category: null,
            cat_id: null,
            product: null,
            pro_id: null
          }
      });
}]);