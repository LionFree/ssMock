
describe("statusAnnotationService", function() {

    var statusAnnotationService;

    beforeEach(module('ssMock'));

    beforeEach(inject(function (_statusAnnotationService_) {
        statusAnnotationService = _statusAnnotationService_;
    }));

    it("should return correct annotations for 'Stopped' state", function () {

        var item = {
            status: 'Stopped'
        };

        var actual = statusAnnotationService(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u2B24');
        expect(actual.cssClass).toBe('status-stopped');
    });

    it("should return correct annotations for 'Running' state", function () {

        var item = {
            status: 'Running'
        };

        var actual = statusAnnotationService(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u2B24');
        expect(actual.cssClass).toBe('status-running');
    });

    it("should return correct annotations for 'Partial' state", function () {

        var item = {
            status: 'Partial'
        };

        var actual = statusAnnotationService(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u2B24');
        expect(actual.cssClass).toBe('status-semi-valid');
    });

    it("should return correct annotations for 'Error' state", function () {

        var item = {
            status: 'Error'
        };

        var actual = statusAnnotationService(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u26A0');
        expect(actual.cssClass).toBe('status-invalid');
    });

    it("should return correct annotations for 'Not Installed' state", function () {

        var item = {
            status: 'Not Installed'
        };

        var actual = statusAnnotationService(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u26A0');
        expect(actual.cssClass).toBe('status-invalid');
    });

    it("should return correct annotations for '' state", function () {

        var item = {
            status: ''
        };

        var actual = statusAnnotationService(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u26A0');
        expect(actual.cssClass).toBe('status-invalid');
    });

    it("should return correct annotations for no state", function () {

        var item = {
            title: 'no status'
        };

        var actual = statusAnnotationService(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u26A0');
        expect(actual.cssClass).toBe('status-invalid');
    });
});