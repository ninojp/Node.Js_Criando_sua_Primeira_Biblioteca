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

function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Arquivo não encontrado!'));
}
// CÓDIGO ASSÍNCRONO (usando .then())
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     // .catch((erro) => trataErro(erro)) //ou como escrito abaixo
//     .catch(trataErro) 
// } 

// CÓDIGO ASSÍNCRONO (usando async/await)
async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const textoResult = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(textoResult));
    } catch (erro) {
        trataErro(erro)
    }
}

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
pegaArquivo('./arquivos/texto.md');
// pegaArquivo('./arquivos/'); // Erro
// pegaArquivo('./arquivos/86 Eighty Six.txt'); // Meu teste com TXT


