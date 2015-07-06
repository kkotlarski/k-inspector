'use strict';

angular.module('app.module.pages.config', [
    'ui.router',
    'app.common.resource.page'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('page', {
                url: '/page',
                resolve: {
                    list: function (PageResource) {
                        return PageResource.query().$promise;
                    }
                },
                views: {
                    nav: {
                        templateUrl: 'module/pages/nav.html',
                        controller: 'PagesCtrl'
                    }
                }
            })
            .state('page.details', {
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
                controller: 'PagesDetailsCtrl',
                views: {
                    'content@': {
                        templateUrl: 'module/pages/content.html',
                        controller: 'PagesDetailsCtrl'
                    }
                }
            });
    })
    .controller('PagesCtrl', function($scope, list) {
        $scope.list = list;
    })
    .controller('PagesDetailsCtrl', function($scope, item) {
        $scope.item = item;
        $scope.data = item;
        $scope.setData = function (index) {
            $scope.data = item.history[index] || item;
        };
    });