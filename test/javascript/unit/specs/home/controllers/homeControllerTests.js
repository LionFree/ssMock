/**
 * Created by CKR1 on 6/12/2016.
 */

describe("home controller", function() {

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
        var controller = createController();
        expect(scope.serverGroups).toBeDefined();
    });

});