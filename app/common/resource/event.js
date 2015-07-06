'use strict';

angular.module('app.common.resource.event', ['ngResource'])
    .service('EventResource', function ($resource) {
        return $resource('http://localhost:3000/k-event/events/:id', {sort: ' startTimestamp'}, {
            'get':    {method:'GET'},
            'query':  {method:'GET', isArray:true}
        });
    });