# Fluig-x-Jasmine-TDD

## Issues
 - Teste de Scripts de Workflow e Formulário
 - Organização dos arquivos do Formulário em pastas (Ao criar o projeto é possível agrupar os arquivos de testes dentro de uma pasta, mas ao importar o projeto essa estrutura é quebrada e os arquivos ficam espalhados)
 
## TODO
 - Testes com React


## Configuração 
 - Criar um Projeto Fluig e um Formulário conforme padrão do Eclipse (Processo.html, Script.js, Functions.js, Style.css)
 - Criar um HTML para rodar os Testes (_JasmineRunner.html) e também um script de testes (_JasmineSpec.js) (o _ é usado na frente do nome do arquivo para agrupar os arquivos de testes)
 - Dentro do HTML de Testes importar o Jasmine TDD
   <!-- Jasmine TDD -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/jasmine.min.css" integrity="sha512-aBUrhDXpQF+G4+cQmf6FLcKcVmruF7aiY/sQiB41R0qQiwCCpqaR/TlRXtRmCo5JpMPpEhh9Mws3XgfMexv70Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/jasmine.min.js" integrity="sha512-ttu5+5M2mNVfgsvJkFydGfbXmIF4NYe+3WcxaxJDXLDlaOOFVgqWfIukTAiJxKYAnfL/YB27qs3JPrK8lI5B4Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/jasmine-html.min.js" integrity="sha512-MumqblPS8FkgqCLBWaiuzCisXlHVxRpZHiUAFyFkJuW6SYriaXWhInKxaPfj3+Cb+UGeff0bB37N10uPt6GJNA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/boot0.min.js" integrity="sha512-cRuvyBugzOgyXyrrLBRjtV65ar5Cw7HdzDWunnf7CqxEICXwBWFhDnVeGRpp3zKUFCFiGsdrVewCJIMa+jMZpg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/5.0.0/boot1.min.js" integrity="sha512-hJQadA7rm9QshrcxKbIBkeypCtxWSBlWUKQTN+wJieSKa9lZWQ29GPrmoJqQXesn7oVYO+RLCMdj4evjEBR+jQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


- Importar os arquivos padrões do Fluig
   <!--Fluig-->
        <script src="/webdesk/vcXMLRPC.js"></script>
        <link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide.min.css" />
        <script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
        <script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
        <script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
        <script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
        
 - Importar os Scripts do Processo e o _JasmineSpec.js
 
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


## Rodando os testes no Fluig
Ao exportar o processo com essa estrutura para o Fluig, o processo executará o Formulário padrão, porém, é possível criar um link no Formulário para acessar o _JasmineRunner.html e ao abrir o arquivo os testes serão executados na página do Fluig, assim sendo possivel utilizar as importações padrões e os Dataset do Fluig


![image](https://github.com/Gabriel-Persike/Fluig-x-Jasmine-TDD/assets/50594940/67387f70-ce22-4922-a785-c65c4023cafc)


