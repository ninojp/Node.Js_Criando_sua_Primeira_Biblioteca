# Dicas Importantes

## MarkDown
Usar mais o MarkDown, pois esta linguagem de marcação e muito usada e util na web
até mesmo para já ir aos poucos assimilando na prática o seu uso.

## Conferir sempre o Manual
Sempre recorrer ao manual de CADA Método, função e etc e se atentar ao principal, 
no caso dos métodos: Os parametros de entrada e o retorno, o que a função vai retornar

## A importancia dos Array
Cada vez mais estou entendendo o por que teve um curso inteiro sobre array
e seus diversos métodos, pois array são muito usados em diversas situações
pois podem conter de **forma ordenada** os mais diversos tipos de dados inclusives 
objetos que por sua vez podem conter **prorpiedades e métodos próprios**.

## Iterator, iterável, iterado ou iterador
Refere-se ao item(dados ou objeto) que dentro de um array será de alguma forma(loop) interagido
sendo o mesmo lido, alterado ou escrito.

## [Spread Operator, Operador de Espalhamento(...)](https://www.youtube.com/watch?v=f8a-qwKC5yk&t=3s)
O Destructuring é muito usado em diversos casos, pois faz o espalhamento dos itens(dados, objetos) dentro de um array

## array.map(), É um Método de arrays
o método map, serve para percorrer um array e retornar outro array com o resultado que queremos.
No caso(da aula)foi criado um array de objetos usando uma arrow function de callback para criar o objeto. Exemplo abaixo
```javascript
const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
console.log(resultados);
```
Sendo que como {} já são por padrão usadas para o scope de função, foi usado os ()
para indicar o scopo e as {} para definir o objeto
Foi usado também o [] indicar a CHAVE: da propriedade do objeto 


## EXPRESSÕES REGULARES
[Site MDN com as Definições e exemplos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
Sites para testes com as Expressões: [Regex101](https://regex101.com/) [Regexr](https://regexr.com/)

Como vimos nesta aula, expressões regulares são objetos que mapeiam padrões de texto por meio 
de uma linguagem própria, com sintaxe e regras específicas. Elas são uma ferramenta eficiente
para resolver problemas de código que envolvem padrões e buscas textuais.
Cada linguagem de programação desenvolve seu próprio interpretador de expressões regulares;
o caso do JavaScript podemos usar //
Depois de trabalharmos com expressões regulares, é bem comum pensarmos em validações de formulário
como um possível uso. A validação de formulários é uma das tarefas que podem consumir muito tempo
Então, usamos as libs(features) para focar nas partes mais importantes do desenvolvimento.

Validações são importantes tanto no lado do front-end quanto do back-end. Você pode conferir duas libs para isso, [Joi](https://joi.dev/) e [Yup](https://www.npmjs.com/package/yup), e suas documentações com exemplos de uso. A Joi tem um [ambiente de testes](https://joi.dev/tester/) que ajudam a visualizar melhor como utilizar os métodos dessa lib.

## Aula 4
**Nessa aula, você aprendeu:**
A utilizar a interface de linha de comando **cli** e como aplicamos a lib process do Node.js para capturar e utilizar os dados informados no terminal em nosso código;
A organizar o código separando em arquivos as funções que lidam com entrada e saída de dados das funções que processam os links;
Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com import e export;
Que scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração package.json e utilizá-los para executar comandos no terminal.

## Aula 5

O **método entries** extrai as propriedades de um objeto como um array [ chave, valor ], Object.entries(‘meuobjeto’), pois entries é um método do objeto Object. Portanto, para exibir o array no console, o correto seria console.log(Object.entries(cliente)).

Na **criação de um objeto em JavaScript**, podemos usar o operador new para criar um objeto, como em const objeto = new Object().

Para iterar sobre as propriedades de um objeto, podemos utilizar a função **for...in** .
Utilizamos for…in para iterar sobre as propriedades enumeráveis de um objeto, como em: for (let info in cliente) { //código }. Você pode conferir mais exemplos no [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in).

### flags
Os hífens -- antes do argumento representam um padrão chamado de flag. As flags servem justamente para especificar opções em um comando.
As flags podem ser utilizadas tanto para “sinalizar” (daí o nome flag, ou “bandeira”) opções específicas em um comando de CLI, como também para indicar que o argumento seguinte é um parâmetro da opção, como por exemplo comando --flag opcao-da-flag.
(ou a versão resumida de um comando com -, chamamos esta versão “menor” do comando de alias, ou pelido)

## Melhorias futuras para o projeto Lib (Biblioteca para check dos links) 
&nbsp;&nbsp;Você pode ter percebido, durante o projeto, que pegar os argumentos da linha de comando através de osições no array pode deixar o projeto um pouco “engessado”.  
E se quisermos adicionar argumentos e flags para funcionalidades adicionais? Fazer o gerenciamento essas informações direto pelo array do process.argv começa a não parecer tão prático.  
A boa notícia é que sim, existe uma biblioteca para lidar com isso, chamada [yargs](https://www.pmjs.com/package/yargs). Sua funcionalidade básica é capturar os comandos do CLI e convertê-los m um objeto, assim os argumentos não dependem mais de estarem na posição correta de um array para uncionar.
Durante a aula, utilizamos somente a propriedade status de cada link para exibir o [código de tatus HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) de cada URL, ou uma ensagem em caso de URL não encontrada. Mas você pode incrementar a sua biblioteca exibindo outros ados da requisição que recebemos ao utilizarmos o fetch.  
Você pode verificar todas as propriedades disponíveis do objeto Response no [MDN](https://eveloper.mozilla.org/en-US/docs/Web/API/Response).

## Publicação da Lib no NPM
Agora que a versão 1.0.0 da lib está fechada, você pode publicá-la, se quiser.  
É possível publicar no NPM para que a biblioteca possa ser instalada com npm install -g <nome-lib>.  
[Preparando os arquivos da lib](https://cursos.alura.com.br/course/nodejs-criando-primeira-biblioteca/task/112074)

## Nessa aula, você aprendeu a:
 - Como utilizar acessar URLs com a API fetch e manipular os dados devolvidos, como o código de status HTTP;
 - Utilizar o método Promise.all para acessar de forma assíncrona um array de URLs e receber o resultado;
 - Que a API fetch é baseada no conceito de promessas em JavaScript, e nessa aula vimos como utiliza o async/await para resolver as promessas e garantir que o código seja executado de forma assíncrona, retornando os resultados.
