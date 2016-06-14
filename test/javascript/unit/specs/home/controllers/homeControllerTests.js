
describe("Home Controller", function() {

    var createController;

    beforeEach(module('ssMock'));
    beforeEach(inject(function ($controller) {
        createController = function() {
            return $controller('HomeController');
        };

    }));

    it('should set the servers', function () {
        var sut = createController();
        expect(sut.servers).toBeDefined();
    });
});