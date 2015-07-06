'use strict';

angular.module('app.module.places.config', [
    'ui.router',
    'app.common.resource.place'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('place', {
                url: '/place',
                resolve: {
                    list: function (PlaceResource) {
                        return PlaceResource.query().$promise;
                    }
                },
                views: {
                    nav: {
                        templateUrl: 'module/places/nav.html',
                        controller: 'PlacesCtrl'
                    }
                }
            })
            .state('place.details', {
                url: '/:id',
                resolve: {
                    item: function (list, $stateParams) {
                        var item = null;
                        if (angular.isArray(list)) {
                            item = list.filter(function (item) {
                                return item._id === $stateParams.id;
                            });
                            item = item[0] || null;
                        }

                        return item;
                    }
                },
                controller: 'PlacesDetailsCtrl',
                views: {
                    'content@': {
                        templateUrl: 'module/places/content.html',
                        controller: 'PlacesDetailsCtrl'
                    }
                }
            });
    })
    .controller('PlacesCtrl', function($scope, list) {
        $scope.list = list;
    })
    .controller('PlacesDetailsCtrl', function($scope, item) {
        $scope.item = item;
    });