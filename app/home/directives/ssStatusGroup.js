(function () {
    'use strict';

    angular
        .module('ssMock')
        .directive('ssStatusGroup', [
            function() {
                return {
                    restrict: 'E',
                    scope: {
                        isOpen: '=',
                        collection: '='
                    },
                    templateUrl: 'directives/ssStatusGroup.html',
                    transclude: true
                }
            }
        ]);
})();