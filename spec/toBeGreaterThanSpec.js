describe("Teste do toBeGreaterThan", function(){
	it("deve demonstrar o uso do toBeGreaterThan", function(){
		var PI = 3.1415;

		expect(4).toBeGreaterThan(PI);
		expect(2.5).not.toBeGreaterThan(PI);
	})
});