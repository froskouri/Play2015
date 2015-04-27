(function () {
    'use strict'; 

    config.$inject = ['$routeProvider', '$locationProvider']; 

    angular.module('songsApp', [
        'ngRoute', 'songsServices'
    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
              templateUrl: '/Views/list.html',
              controller: 'SongsListController'
            })
            .when('/songs/add', {
                templateUrl: '/Views/add.html',
                controller: 'SongsAddController'
            })
            .when('/songs/edit/:id', {
                templateUrl: '/Views/edit.html',
                controller: 'SongsEditController'
            })
            .when('/songs/delete/:id', {
                templateUrl: '/Views/delete.html',
                controller: 'SongsDeleteController'
            });

        $locationProvider.html5Mode(true); 
    }

})();