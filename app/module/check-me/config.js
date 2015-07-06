'use strict';

angular.module('app.module.check-me.config', [
    'ui.router',
    'app.common.resource.page'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('check-me', {
                url: '/check-me',
                resolve: {
                    list: function (PageResource) {
                        return PageResource.query({
                            sort: 'lastUpdate',
                            query: JSON.stringify({error: {$ne: []}})
                        }).$promise;
                    }
                },
                views: {
                    nav: {
                        templateUrl: 'module/check-me/nav.html',
                        controller: 'CheckMeCtrl'
                    }
                }
            })
            .state('check-me.details', {
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
                controller: 'CheckMeDetailsCtrl',
                views: {
                    'content@': {
                        templateUrl: 'module/check-me/content.html',
                        controller: 'CheckMeDetailsCtrl'
                    }
                }
            });
    })
    .controller('CheckMeCtrl', function($scope, list) {
        $scope.list = list;
    })
    .controller('CheckMeDetailsCtrl', function($scope, item) {
        $scope.item = item;
        $scope.data = item;
        $scope.setData = function (index) {
            $scope.data = item.history[index] || item;
        };
    });