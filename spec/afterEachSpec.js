describe("Teste do afterEach",function(){
	
	var contador = 0;
	
	beforeEach(function(){
		contador++;
	});

	afterEach(function(){
		contador = 0;
	});

	it("deve garantir o contador com 1",function(){
		expect(contador).toEqual(1);
	});

		it("deve ainda garantir o contador com 1",function(){
		expect(contador).toEqual(1);
	});

});