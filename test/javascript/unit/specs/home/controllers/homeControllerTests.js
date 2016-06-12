/**
 * Created by CKR1 on 6/12/2016.
 */

describe('homeController', function() {

    describe('sut', function () {

        beforeEach(module('ssMock'));

        var controller, scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('homeController', {
                '$scope': scope
            });
        }));

        it('sets the serverGroups', function () {
            expect(scope.serverGroups).toBeDefined();
        });
    });

});