
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

        sut.annotate(item);

        expect(item).toBeDefined();
        expect(item.symbol).toBe('\u2B24');
        expect(item.cssClass).toBe('status-stopped');
    });

    it("should return correct annotations for 'Running' state", function () {

        var item = {
            status: 'Running'
        };

        sut.annotate(item);

        expect(item).toBeDefined();
        expect(item.symbol).toBe('\u2B24');
        expect(item.cssClass).toBe('status-running');
    });

    it("should return correct annotations for 'Partial' state", function () {

        var item = {
            status: 'Partial'
        };

        sut.annotate(item);

        expect(item).toBeDefined();
        expect(item.symbol).toBe('\u2B24');
        expect(item.cssClass).toBe('status-semi-valid');
    });

    it("should return correct annotations for 'Error' state", function () {

        var item = {
            status: 'Error'
        };

        sut.annotate(item);

        expect(item).toBeDefined();
        expect(item.symbol).toBe('\u26A0');
        expect(item.cssClass).toBe('status-invalid');
    });

    it("should return correct annotations for 'Not Installed' state", function () {

        var item = {
            status: 'Not Installed'
        };

        sut.annotate(item);

        expect(item).toBeDefined();
        expect(item.symbol).toBe('\u26A0');
        expect(item.cssClass).toBe('status-invalid');
    });

    it("should return correct annotations for '' state", function () {

        var item = {
            status: ''
        };

        sut.annotate(item);

        expect(item).toBeDefined();
        expect(item.symbol).toBe('\u26A0');
        expect(item.cssClass).toBe('status-invalid');
    });

    it("should return correct annotations for no state", function () {

        var item = {
            title: 'no status'
        };

        sut.annotate(item);

        expect(item).toBeDefined();
        expect(item.symbol).toBe('\u26A0');
        expect(item.cssClass).toBe('status-invalid');
    });
});