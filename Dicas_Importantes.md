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

## Spread Operator, Operador de Espalhamento(...)
Muito usado em diversos casos, pois faz o espalhamento dos itens(dados, objetos) dentro de um array

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

# Aula 4
**Nessa aula, você aprendeu:**
A utilizar a interface de linha de comando **cli** e como aplicamos a lib process do Node.js para capturar e utilizar os dados informados no terminal em nosso código;
A organizar o código separando em arquivos as funções que lidam com entrada e saída de dados das funções que processam os links;
Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com import e export;
Que scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração package.json e utilizá-los para executar comandos no terminal.