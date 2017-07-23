'use strict'
var app = angular.module('app',['ui.router','ngMap']);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'ngapp/templates/home.html',
        controller:'home'
    })
    .state('md6',{
        url:'/md6',
        templateUrl:'ngapp/templates/md6.html',
        controller:'md6'
    })
    .state('about',{
        url:'/about',
        templateUrl:'ngapp/templates/about.html',
        controller:'about'
    })
    .state('shop',{
        url:'/shop',
        templateUrl:'ngapp/templates/shop.html',
        controller:'shop'
    })
    .state('contact',{
        url:'/contact',
        templateUrl:'ngapp/templates/contact.html',
        controller:'contact'
    })
    .state('volounteer',{
        url:'/volounteer',
        templateUrl:'ngapp/templates/volounteer.html',
        controller:'volunteer'
    });
    
    $urlRouterProvider.otherwise('/');
});