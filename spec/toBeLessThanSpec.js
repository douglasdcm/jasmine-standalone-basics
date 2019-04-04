describe("Teste do toBeLessThan", function(){
	it("deve demonstrsro uso do toBeLessThan", function(){
		var PI = 3.1415;

		expect(3).toBeLessThan(PI);
		expect(3.5).not.toBeLessThan(PI);
	})
});