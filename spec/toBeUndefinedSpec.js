describe("Teste do toBeUndefined", function(){
	it("deve demostrar o uso do toBeUndefined", function(){
		var n1;
		var n2 = undefined;
		var n3 = false;

		expect(n1).toBeUndefined();
		expect(n2).toBeUndefined();
		expect(n3).not.toBeUndefined();
		expect(null).not.toBeUndefined();

	});
});