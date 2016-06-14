(function () {
    'use strict';

    angular
        .module('ssMock')
        .directive('ssServerStatusDisplay', [
            function() {

                return {
                    restrict: 'E',
                    scope: {
                        isOpen: '=',
                        collection: '='
                    },
                    templateUrl: 'templates/ssServerStatusDisplay.html',
                    transclude: true
                };
            }
        ]);

    angular
        .module('ssMock')
        .directive('ssStatusHeader', [
            function() {
                return {
                    restrict: 'E',
                    scope: {
                        isOpen: '=',
                        item: '='
                    },
                    templateUrl: 'templates/ssStatusHeader.html',
                    transclude: true
                }
            }
        ]);

    angular
        .module('ssMock')
        .directive('ssServiceTable', [
            function() {
                return {
                    restrict: 'E',
                    scope: {
                        serviceGroup: '='
                    },
                    templateUrl: 'templates/ssServiceTable.html'
                }
            }
        ]);

})();