(function () {
    'use strict';

    angular
        .module('ssMock')
        .directive('ssMember', [
            function() {
                return {
                    restrict: 'E',
                    scope: {
                        member: '=',
                    },
                    template: '',
                    link: function (scope, element, attrs) {
                        if (angular.isArray(scope.member.children)) {
                            element.append("<ss-group collection='member.children'></ss-group>");
                            $compile(element.contents())(scope)
                        }
                    },
                    transclude: true
                }
            }
        ]);
})();