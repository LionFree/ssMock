// // application-configuration.js
//
// "use strict";
//
// define(['angularAMD', 'angular-route', 'ngAnimate', 'ui-bootstrap', ],
//     function (angularAMD) {
//         var app = angular.module('mainModule', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
//
//         app.config(['$routeProvider', function ($routeProvider) {
//
//             $routeProvider
//
//                 .when("/", angularAMD.route({
//
//                     templateUrl: function (rp) {  return 'home/homeView.html';  },
//                     controllerUrl: "home/homeController"
//                 }))
//
//                 .otherwise({ redirectTo: '/' })
//         }]);
//
//         var indexController = function ($scope, $rootScope) {
//
//             $scope.initializeController = function () {
//                 $rootScope.displayContent = true;
//                 $rootScope.IsloggedIn = true;
//             };
//         };
//
//
//         indexController.$inject = ['$scope', '$rootScope'];
//         app.controller("indexController", indexController);
//
//         // Bootstrap Angular when DOM is ready
//         angularAMD.bootstrap(app);
//
//         return app;
//     });