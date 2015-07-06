'use strict';

angular.module('app.module.index.config', [
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('index', {
                url: '',
                views: {
                    content: {
                        templateUrl: 'module/index/template.html'
                    }
                }
            });
    });
