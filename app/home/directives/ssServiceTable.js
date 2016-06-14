(function () {
    'use strict';

    angular
        .module('ssMock')
        .directive('ssServiceTable', [
            function() {
                return {
                    restrict: 'E',
                    scope: {
                        serviceGroup: '='
                    },
                    templateUrl: 'directives/ssServiceTable.html'
                }
            }
        ]);
})();