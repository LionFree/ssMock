/**
 * Created by CKR1 on 6/12/2016.
 */

'use strict';

describe('homeController', function() {

    var controller, scope, homeServiceMock;

    //beforeEach(module('ssMock'));

    describe('sut', function () {
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