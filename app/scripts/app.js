/* global angular Firebase window */
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function () {
'use strict';

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/404');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html'
        })

        .state('about', {
          url: '/about',
          templateUrl: '/views/about.html'
        })
        /*
        .otherwise({
          redirectTo: '/home'
        });
        */

});

})();
