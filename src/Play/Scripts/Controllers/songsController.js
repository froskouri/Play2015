(function () {
    'use strict';

    angular
        .module('songsApp')
        .controller('SongsListController', SongsListController)
        .controller('SongsAddController', SongsAddController)
        .controller('SongsEditController', SongsEditController)
        .controller('SongsDeleteController', SongsDeleteController);

    /* Songs List Controller  */
    SongsListController.$inject = ['$scope', 'Song'];

    function SongsListController($scope, Song) {
        $scope.songs = Song.query();
    }

    /* Songs Create Controller */
    SongsAddController.$inject = ['$scope', '$location', 'Song'];

    function SongsAddController($scope, $location, Song) {
    	$scope.song = new Song();
        $scope.add = function () {
        	$scope.song.$save(
				// success
				function () {
					$location.path('/');
				},
				// error
				function (error) {
					_showValidationErrors($scope, error);
				}
			);
        };

    }

    /* Songs Edit Controller */ 
    SongsEditController.$inject = ['$scope', '$routeParams', '$location', 'Song'];

    function SongsEditController($scope, $routeParams, $location, Song) {
    	$scope.song = Song.get({ id: $routeParams.id });
        $scope.edit = function () {
        	$scope.song.$save(
				// success
				function () {
					$location.path('/');
				},
				// error
				function (error) {
					_showValidationErrors($scope, error);
				}
			);
        };
    }

    /* Songs Delete Controller  */
    SongsDeleteController.$inject = ['$scope', '$routeParams', '$location', 'Song'];

    function SongsDeleteController($scope, $routeParams, $location, Song) {
    	$scope.song = Song.get({ id: $routeParams.id });
        $scope.remove = function () {
        	$scope.song.$remove({ id: $scope.song.Id }, function () {
                $location.path('/');
            });
        };
    }
    
	/* Utility Functions */

    function _showValidationErrors($scope, error) {
    	$scope.validationErrors = [];
    	if (error.data && angular.isObject(error.data)) {
    		for (var key in error.data) {
    			$scope.validationErrors.push(error.data[key][0]);
    		}
    	} else {
    		$scope.validationErrors.push('Could not add song.');
    	};
    }

})();
