describe("Teste do toThrowError", function(){
	it("deve demonstrar o uso do toThrowError", function(){
		var somar = function(n1, n2){
			if(n1 <= 0 || n2 <= 0){
				throw new TypeError("deve ser maior que zero");
			}
			return n1 + n2;
		}
	expect(function(){somar (0,0)}).toThrowError();
	expect(function(){somar (0,0)}).toThrowError("deve ser maior que zero");
	expect(function(){somar (0,0)}).toThrowError(/maior que zero/);
	expect(function(){somar (0,0)}).toThrowError(TypeError);
	expect(function(){somar (0,0)}).toThrowError(TypeError, "deve ser maior que zero");
	expect(function(){somar (1,1)}).not.toThrowError();

	})
});