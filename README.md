# Fluig-x-Jasmine-TDD

## Issues
 - Teste de Scripts de Workflow e Formulário
 - Organização dos arquivos do Formulário em pastas (Ao criar o projeto é possível agrupar os arquivos de testes dentro de uma pasta, mas ao importar o projeto essa estrutura é quebrada e os arquivos ficam espalhados)
 
## TODO
 - Testes com React


## Configuração 
 - Criar um Projeto Fluig e um Formulário conforme padrão do Eclipse (Processo.html, Script.js, Functions.js, Style.css)
 - Criar um HTML para rodar os Testes (_JasmineRunner.html) e também um script de testes (_JasmineSpec.js) (o _ é usado na frente do nome do arquivo para agrupar os arquivos de testes)
 - Dentro do HTML de Testes realizar as importações abaixo
 
        <!-- Jasmine TDD -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/jasmine.min.css" integrity="sha512-aBUrhDXpQF+G4+cQmf6FLcKcVmruF7aiY/sQiB41R0qQiwCCpqaR/TlRXtRmCo5JpMPpEhh9Mws3XgfMexv70Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/jasmine.min.js" integrity="sha512-ttu5+5M2mNVfgsvJkFydGfbXmIF4NYe+3WcxaxJDXLDlaOOFVgqWfIukTAiJxKYAnfL/YB27qs3JPrK8lI5B4Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/jasmine-html.min.js" integrity="sha512-MumqblPS8FkgqCLBWaiuzCisXlHVxRpZHiUAFyFkJuW6SYriaXWhInKxaPfj3+Cb+UGeff0bB37N10uPt6GJNA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/boot0.min.js" integrity="sha512-cRuvyBugzOgyXyrrLBRjtV65ar5Cw7HdzDWunnf7CqxEICXwBWFhDnVeGRpp3zKUFCFiGsdrVewCJIMa+jMZpg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/boot1.min.js" integrity="sha512-hJQadA7rm9QshrcxKbIBkeypCtxWSBlWUKQTN+wJieSKa9lZWQ29GPrmoJqQXesn7oVYO+RLCMdj4evjEBR+jQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <!--Fluig-->
        <script src="/webdesk/vcXMLRPC.js"></script>
        <link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide.min.css" />
        <script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
        <script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
        <script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
        <script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
        
        <!-- Testes -->
        <script src="_JasmineSpec.js"></script>

        <!-- Processo -->
        <script src="Functions.js"></script>
        <script src="Script.js"></script>
        
       
## Utilização
Após a Configuração já é possível criar os testes dentro do _JasmineSpec.js

    describe("Testando as Funções", ()=>{
     it('should be 5', () => {
      expect(sum(2,3)).toBe(5);
     });
    });

E então escrever a função no Functions.js

    function sum(a,b){
       return parseInt(a) + parseInt(b);
    }

Ao abrir o arquivo _JasmineRunner.html os testes serão executados
![image](https://github.com/Gabriel-Persike/Fluig-x-Jasmine-TDD/assets/50594940/57f98201-4117-4134-bb5e-c90fd58c8153)


## Rodando os testes no Fluig
Ao exportar o processo com essa estrutura para o Fluig, o processo executará o Formulário padrão, porém, é possível criar um link no Formulário para acessar o _JasmineRunner.html e ao abrir o arquivo os testes serão executados na página do Fluig, assim sendo possivel utilizar as importações padrões e os Dataset do Fluig


![image](https://github.com/Gabriel-Persike/Fluig-x-Jasmine-TDD/assets/50594940/67387f70-ce22-4922-a785-c65c4023cafc)


## Testando Datasets Fluig
Ao abrir o _JasmineRunner.html é possível executar testes com as funções padrões do FLuig, conforme o teste abaixo que verifica uma função que retorna o nome do usuário sendo passado o colleagueId como parâmetro

Teste:

    describe("Testando Chamada de Datasets", ()=>{
       it('should return my Name', () => {
          expect(retornaNomeusuario("gabriel.persike")).toBe("Gabriel Persike");	
        });
    })

 Função:
 
    function retornaNomeusuario(user){
       var ds = DatasetFactory.getDataset("colleague", ["colleagueName"],[
           DatasetFactory.createConstraint("colleagueId", user,user, ConstraintType.MUST)
       ],null);

       return ds.values[0].colleagueName;
    }

![image](https://github.com/Gabriel-Persike/Fluig-x-Jasmine-TDD/assets/50594940/feb7d004-fb1f-46c5-aff1-ca0144653206)


## Testando as interações de usuário
É possível criar uma cópia do HTML do Formulário dentro do HTML de Teste para simular as interações de usuário (Possivelmente há alguma forma de importar diretamente o HTML sem ter que fazer uma cópia)

Após copiar o <body> do HTML basta simular a interação do usuário dentro do teste conforme o teste abaixo que simula o usuário digitando dois números nos campos que realizam a soma
 

        describe("Testando os inputs do Formulário", ()=>{
         it('should set sum text to 10', () => {
         $("#a").val(3);
         $("#b").val(7);
         $("#a").trigger("change");
         expect($("#sum").text()).toBe("10");
        });
       });

Agora, ao executar o teste, tanto o resultado dos testes quando o Formulário copiado serão apresentados na mesma página, e as simulações de interação serão apresentadas na tela e após o testes o Jasmine mostrará os sucessos e falhas
 
 ![image](https://github.com/Gabriel-Persike/Fluig-x-Jasmine-TDD/assets/50594940/7feca896-e9b7-4231-8bf3-ad59b77e2cee)
