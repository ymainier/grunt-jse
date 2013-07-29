describe('My.Default.Awesome.Module ', function () {
	SpecHelper.JSEPackage.importAndWaitFor('My.Default.Awesome.Module');

	it('should be defined', function () {
		expect(My.Default.Awesome.Module).toBeDefined();
	});
});
