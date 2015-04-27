(function () {
    'use strict';

    angular
        .module('songsServices', ['ngResource'])
        .factory('Song', Song);

    Song.$inject = ['$resource'];

    function Song($resource) {
        return $resource('/api/songsService/:id');
    }


})();