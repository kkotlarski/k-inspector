'use strict';

angular.module('app.module.events.config', [
    'ui.router',
    'app.common.resource.event'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('event', {
                url: '/event',
                resolve: {
                    list: function (EventResource) {
                        return EventResource.query().$promise;
                    }
                },
                views: {
                    nav: {
                        templateUrl: 'module/events/nav.html',
                        controller: 'EventsCtrl'
                    }
                }
            })
            .state('event.details', {
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
                controller: 'EventsDetailsCtrl',
                views: {
                    'content@': {
                        templateUrl: 'module/events/content.html',
                        controller: 'EventsDetailsCtrl'
                    }
                }
            });
    })
    .controller('EventsCtrl', function($scope, list) {
        $scope.list = list;
    })
    .controller('EventsDetailsCtrl', function($scope, item) {
        $scope.item = item;
    });