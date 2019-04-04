describe("Teste do toEqual", function(){
	it("Deve validar o uso do toEqual", function(){
		var obj1 = {valor: true};
		var obj2 = {valor: true};
		expect(true).toEqual(true);
		expect(obj1).toEqual(obj2);
	});
});