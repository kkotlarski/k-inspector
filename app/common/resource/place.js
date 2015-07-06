'use strict';

angular.module('app.common.resource.place', ['ngResource'])
    .service('PlaceResource', function ($resource) {
        return $resource('http://localhost:3000/k-event/places/:id', {sort: 'name'}, {
            'get':    {method:'GET'},
            'query':  {method:'GET', isArray:true}
        });
    });