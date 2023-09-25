import fs from 'fs';
import chalk from 'chalk';

const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).';

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*\))/gm;
    const capturas = regex.exec(texto);
    console.log(capturas);
}
extraiLinks(textoTeste);

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
        console.log(chalk.green(textoResult));
    } catch (erro) {
        trataErro(erro)
    }
}
// pegaArquivo('./arquivos/texto.md');
// pegaArquivo('./arquivos/'); //Erro para testes

//========================================================================================
// EXPRESSÕES REGULARES
// Expressão regular, para selecionar tudo dentro dos COLCHETES[]
// \[[^[\]]*?\]
// Expressão regular, para selecionar tudo dentro das PARENTESES(http...)
// /\(https?:\/\/[^\s?#.].[^\s]*\)

// Agora para selecionar somento o texto DENTRO dos [], (). Usamos o PARENTESES()  
// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*\))
