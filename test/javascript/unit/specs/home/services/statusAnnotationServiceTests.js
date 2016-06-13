
describe("statusAnnotationService", function() {

    var sut;

    beforeEach(module('ssMock'));
    beforeEach(inject(function (_statusAnnotationService_) {
        sut = _statusAnnotationService_;
    }));

    it("should return correct annotations for 'Stopped' state", function () {

        var item = {
            status: 'Stopped'
        };

        var actual = sut.annotate(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u2B24');
        expect(actual.cssClass).toBe('status-stopped');
    });

    it("should return correct annotations for 'Running' state", function () {

        var item = {
            status: 'Running'
        };

        var actual = sut.annotate(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u2B24');
        expect(actual.cssClass).toBe('status-running');
    });

    it("should return correct annotations for 'Partial' state", function () {

        var item = {
            status: 'Partial'
        };

        var actual = sut.annotate(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u2B24');
        expect(actual.cssClass).toBe('status-semi-valid');
    });

    it("should return correct annotations for 'Error' state", function () {

        var item = {
            status: 'Error'
        };

        var actual = sut.annotate(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u26A0');
        expect(actual.cssClass).toBe('status-invalid');
    });

    it("should return correct annotations for 'Not Installed' state", function () {

        var item = {
            status: 'Not Installed'
        };

        var actual = sut.annotate(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u26A0');
        expect(actual.cssClass).toBe('status-invalid');
    });

    it("should return correct annotations for '' state", function () {

        var item = {
            status: ''
        };

        var actual = sut.annotate(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u26A0');
        expect(actual.cssClass).toBe('status-invalid');
    });

    it("should return correct annotations for no state", function () {

        var item = {
            title: 'no status'
        };

        var actual = sut.annotate(item);

        expect(actual).toBeDefined();
        expect(actual.symbol).toBe('\u26A0');
        expect(actual.cssClass).toBe('status-invalid');
    });
});