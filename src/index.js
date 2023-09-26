import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultado = capturas.map((captura) => ({[captura[1]]:captura[2]}))
    return resultado.length !== 0? resultado : 'O texto não possui Links';
}
// extraiLinks(textoTeste); //usado nos testes, com um texto(interno) que foi deletado

//--------------------------------------------------------------------------------
function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Arquivo não encontrado!'));
}
// CÓDIGO ASSÍNCRONO (usando async/await)
async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const textoResult = await fs.promises.readFile(caminhoDoArquivo, encoding)
        // console.log(chalk.green(textoResult));
        return extraiLinks(textoResult);
    } catch (erro) {
        trataErro(erro)
    }
}
export default pegaArquivo;
// pegaArquivo('./arquivos/texto.md');
// pegaArquivo('./arquivos/'); //Erro para testes

//========================================================================================
// EXPRESSÃO REGULAR USADA
// Expressão regular, para selecionar tudo dentro dos COLCHETES[]
// \[[^[\]]*?\]
// Expressão regular, para selecionar tudo dentro das PARENTESES(http...)
// /\(https?:\/\/[^\s?#.].[^\s]*)\)

// Agora para selecionar somento o texto DENTRO dos [], (). Usamos o PARENTESES()  
// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
