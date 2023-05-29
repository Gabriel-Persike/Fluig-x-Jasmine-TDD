describe('Teste', function () {
	it('should be true', () => {
		expect(true).toBe(true);
	});
});

describe("Testando as Funções", ()=>{
	it('should be 5', () => {
		expect(sum(2,3)).toBe(5);
	});
	it('should be 8', () => {
		expect(sum("3","5")).toBe(8);
	});
});

describe("Testando Chamada de Datasets", ()=>{
	it('should return my Name', () => {
		expect(retornaNomeusuario("gabriel.persike")).toBe("Gabriel Persike");
	});
})

describe("Testando os inputs do Formulário", ()=>{
	it('should set sum text to 10', () => {
		$("#a").val(3);
		$("#b").val(7);
		$("#a").trigger("change");
		expect($("#sum").text()).toBe("10");
	});
});