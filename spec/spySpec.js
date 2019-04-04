describe("Testes do objeto jasmine.createSpyObj", function(){

	var Calculadora;

	beforeAll(function(){
		Calculadora = jasmine.createSpyObj("Calculadora",
			 ["somar", "subtrair"]);

		Calculadora.somar.and.returnValue(5);
	});

	it("deve demostrar o uso do jasmine.createSpyObject", function(){
		var retorno = Calculadora.somar(1, 2);

		expect(Calculadora.somar).toHaveBeenCalled();
		expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
		expect(retorno).toEqual(5);
	});

/*
describe("Testes do objeto jasmine.createSpy", function(){

	var somar;

	beforeAll(function(){

		somar = jasmine.createSpy("somar");

	});

	it("deve demostrar o uso do jasmine.createSpy", function(){
		somar(1, 2);
		expect(somar).toHaveBeenCalled();
		expect(somar).toHaveBeenCalledWith(1,2);
	});


describe("Testes do objeto Spy", function(){
	var Calculadora = {
		somar: function(n1, n2){
			return n1 + n2;
		},


		subtrair: function(n1, n2){
			return n1 - n2;
		}
	};


	beforeAll(function(){
		spyOn(Calculadora, "somar").and.returnValue(10);
		spyOn(Calculadora, "subtrair");
	});

	it("deve demostrar o uso do calls.count", function(){
		Calculadora.somar(1,1);
		Calculadora.somar(1,2);
		expect(Calculadora.somar.calls.count()).toEqual(3);
		Calculadora.somar(1,3);
	});


====
beforeAll(function(){
		spyOn(Calculadora, "somar").and.returnValue(10);
		spyOn(Calculadora, "subtrair");
	});

	it("deve demostrar o uso do calls.count", function(){
		Calculadora.somar(1,1);
		Calculadora.somar(1,2);
		Calculadora.somar(1,3);
		expect(Calculadora.somar.calls.count()).toEqual(3);
	});
=====

	beforeAll(function(){
		spyOn(Calculadora, "somar").and.returnValue(10);
		spyOn(Calculadora, "subtrair");
	});

	it("deve demostrar o uso do calls.any", function(){
		Calculadora.somar(1,1);
		expect(Calculadora.somar.calls.any()).toBeTruthy();
	});

====
beforeAll(function(){
		spyOn(Calculadora, "somar").and.throwError("erro");
		spyOn(Calculadora, "subtrair");
	});

	it("deve laçar um erro ao somar", function(){
		expect(function(){
			Calculadora.somar(1, 1);
		}).toThrowError("erro");
	});

=====
	beforeAll(function(){
		spyOn(Calculadora, "somar").and.callFake(function(n1, n2){
			return n1 - n2;
		});
		spyOn(Calculadora, "subtrair");
	});

	it("deve transformar o metodo somar em subtracao", function(){
		expect(Calculadora.somar(5,2)).toEqual(3);
	});

====

beforeAll(function(){
		spyOn(Calculadora, "somar").and.returnValues(1, 5);
		spyOn(Calculadora, "subtrair");
	});

	it("deve retornar valores distintos para o metodo somar", function(){
		expect(Calculadora.somar(3,4)).toEqual(1);
		expect(Calculadora.somar(5,7)).toEqual(5);
		expect(Calculadora.somar(9,5)).toBeUndefined();
	});


====

	beforeAll(function(){
		spyOn(Calculadora, "somar").and.returnValue(10);
		spyOn(Calculadora, "subtrair");
	});

	it("deve retornar 10 para o metodo somar", function(){
		expect(Calculadora.somar(1,2)).toEqual(10);
	});

===
	beforeAll(function(){
		spyOn(Calculadora, "somar").and.callThrough();
		spyOn(Calculadora, "subtrair");
	});

	it("deve executar o metodo somar original", function(){
		expect(Calculadora.somar(1,1)).toEqual(2);
		expect(Calculadora.subtrair(2,1)).toBeUndefined();
	});

====

		beforeAll(function(){
		spyOn(Calculadora, "somar");
		spyOn(Calculadora, "subtrair");
	});

	it("deve possuir o metodo somar como nao definido", function(){
		expect(Calculadora.somar(1,1)).toBeUndefined();
	});

	it("deve chamar o metodo somar ao menos uma vez", function(){
			Calculadora.somar(1,1);
			expect(Calculadora.somar).toHaveBeenCalled();
	});

	it("deve chamar o metodo somar duas vezes", function(){
		Calculadora.somar(1,1);
		Calculadora.somar(1,2);
		expect(Calculadora.somar).toHaveBeenCalledTimes(4);
	});

	it("deve chamar o metodo somar com os parametros validos", function(){
		Calculadora.somar(1,1);
		Calculadora.somar(1,2);
		expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
		expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
	});
	*/


});