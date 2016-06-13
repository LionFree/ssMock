
describe("Home Controller", function() {

    var scope, createController;

    beforeEach(module('ssMock'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('homeController', {
                '$scope': scope
            });
        };

    }));

    it('should set the serverGroups', function () {
        createController();
        expect(scope.serverGroups).toBeDefined();
    });
});