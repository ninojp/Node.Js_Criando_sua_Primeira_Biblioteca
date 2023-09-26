import fs from 'fs';
import chalk from 'chalk';
// Sempre que vamos trabalhar com um projeto em Node.js do zero, uma das primeiras coisas que fazemos
//é criar um arquivo package.json utilizando o comando npm init ou yarn init; assim como para todas as
//instalações de libs externas utilizamos o comando npm install <nome do pacote> ou yarn add <nome do pacote>.
// Para fazer uma instalação global de pacotes, utilizamos os comandos npm install -g <nome do pacote>
//ou yarn add global <nome do pacote>. A recomendação é que a instalação de pacotes seja feita sempre localmente (sem o -g) 
//e que a instalação global só seja feita em casos específicos 

// Estes pacotes de código podem ser instalados localmente, estando disponíveis somente para o projeto no qual
//foi instalado através da pasta node_modules, e globalmente, sendo instalados em um diretório geral do NPM e 
//ficando disponíveis para todos os projetos em seu computador, sem a necessidade de instalar separadamente em cada projeto.
//---------------------------------------------------------------------------------------------------

// CÓDIGO SÍNCRONO (Não trabalha com Promessas)
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>{
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }
//==============================================================================================

// Além do .then() e do async/await, o JavaScript também tem 
//um método construtor para resolver promessas, o Promise().
// Enquanto .then() e async/await são utilizados quando temos 
//que lidar com promessas já existentes - por exemplo, ao executarmos o método fetch()
//que, por definição, sempre retorna uma promessa, usamos o construtor Promise()
//para escrever do zero nossas próprias promessas.
//---------------------------------------------------------------------------------------------

// CÓDIGO ASSÍNCRONO (usando .then())
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    // .catch((erro) => trataErro(erro)) //ou como escrito abaixo
    .catch(trataErro) 
} 
//==============================================================================================

// Vamos ver um exemplo de função que recebe um valor booleano (true ou false)
//e com base nesse valor retorna uma new Promise() rejeitada ou completa.
function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
      if (!x) {
        reject(new Error("falha na promessa"));
      }
      resolve("sucesso na promessa");
    });
   }
function exibeResposta(textoResult) {
console.log(textoResult);
}
promessa(true)
.then((texto) => exibeResposta(texto)) // sucesso na promessa
// Assim, concluímos que sempre temos que ter em mente os estados possíveis de qualquer promessa em JavaScript:
//==============================================================================================

// 1 - Promessas podem ser concluídas de duas formas: fulfilled (realizada, completa)
//ou rejected (rejeitada), o que equivale a duas situações possíveis, 
//ou a promessa se concretizou (retornou os dados ou executou o código que deveria) ou não.

// 2 - Promessas que não estão fulfilled nem rejected estão pending (pendentes).
//Ou seja, ainda não é possível saber o resultado final porque o processamento ainda não foi concluído.

// 3 - Após a finalização do processamento, a promessa passa para o estado de settled (concluída), independente do resultado.

// 4 - Uma vez que a promessa está settled seu resultado não se altera mais. Ou seja, 
//uma promessa que se concluiu como rejected não muda mais para o estado de fulfilled e vice-versa.
//================================================================================================

// Ainda existe um último bloco, o finally, que é executado sempre, independentemente da execução do código
//ter sido resolvida no try ou gerado um erro passado para o catch. Tanto catch quanto finally são opcionais,
//mas o try deve sempre estar acompanhado de um ou outro.
// Ao contrário do catch, o finally não recebe nenhum dado através dos parênteses ( ). 
function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Arquivo não encontrado!'));
}
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro) {
      trataErro(erro);
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}
pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');
// pegaArquivo('./arquivos/Exemplo_texto.txt'); // Meu teste com TXT
//==============================================================================================

