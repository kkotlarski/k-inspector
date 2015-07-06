'use strict';

angular.module('app.common.resource.page', ['ngResource'])
    .service('PageResource', function ($resource) {
        return $resource('http://localhost:3000/webapi/pages/:id', {}, {
            'get':    {method:'GET'},
            'query':  {method:'GET', isArray:true}
        });
    });