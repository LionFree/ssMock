(function () {
    'use strict';

    angular
        .module('ssMock')
        .factory('statusAnnotationService', annotationService);

    function annotationService() {

        return {
            annotate: annotateService
        };

        function annotateService(obj) {

            switch (obj.status) {
                case 'Stopped':
                    obj.symbol = '\u2B24';
                    obj.cssClass = 'status-stopped';
                    break;
                case 'Running':
                    obj.symbol = '\u2B24';
                    obj.cssClass = 'status-running';
                    break;
                case 'Partial':
                    obj.symbol = '\u2B24';
                    obj.cssClass = 'status-semi-valid';
                    break;
                case 'Error':
                case 'Not Installed':
                default:
                    obj.symbol = '\u26A0';
                    obj.cssClass = 'status-invalid';
            }
            return obj;
        }
    }
})();