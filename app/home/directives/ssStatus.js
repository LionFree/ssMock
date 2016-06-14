(function () {
    'use strict';

    angular
        .module('ssMock')
        .directive('ssStatus', [
            function() {
                return {
                    restrict: 'E',
                    scope: {
                        isOpen: '=',
                        item: '='
                    },
                    templateUrl: 'directives/ssStatus.html',
                    transclude: true
                }
            }
        ]);
})();