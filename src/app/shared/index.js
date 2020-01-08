'use strict'

function AppHeaderDirective() {
    return {
        template: require('./headerTemplate.html')
    };
}

function AppFooterDirective() {
    return {
        template: require('./footerTemplate.html')
    };
}

angular.module('App.shared', [])
.directive('appHeader', AppHeaderDirective)
.directive('appFooter', AppFooterDirective)
.name;