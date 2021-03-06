'use strict';

angular.module('rando.map', [])
    .service('mapService', require('./services').mapService)
    .service('centerService', require('./services').centerService)
    .service('boundsLimitService', require('./services').boundsLimitService)
    .service('popupService', require('./services').popupService)
    .service('layersService', require('./services').layersService)
    .controller('MapController', require('./controllers').MapController)
    .directive('geotrekMap', require('./directives').mapDirective);
