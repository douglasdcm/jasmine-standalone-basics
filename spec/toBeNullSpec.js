describe("Teste do toBeNull", function(){
	it("deve demosntrar o uso do toBeNull", function(){

		var n1 = null;
		var n2 = undefined;
		var n3;
		var n4 = NaN;
		var n5 = "teste";

		expect(n1).toBeNull();
		expect(n2).not.toBeNull();
		expect(n3).not.toBeNull();
		expect(n4).not.toBeNull();
		expect(n5).not.toBeNull();



	});
});