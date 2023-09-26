import pegaArquivo from "./index.js";
import chalk from 'chalk';
import fs from 'fs';

const caminho = process.argv;
function imprimeLista(resultado, txtEnderecoNome=''){
    console.log(chalk.blue.bgWhite(txtEnderecoNome), resultado); 
    // console.log(chalk.yellow('Lista de Links'), resultado);
}

async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3];
    console.log(valida);
    try{
        fs.lstatSync(caminho);
    }catch(erro){
        if(erro.code === 'ENOENT'){
            console.log(chalk.black.bgRed('Endereço ou arquivo não encontrado!'))
            return;
        }
    }
    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho);
        // console.log(chalk.yellow('Lista de Links'), resultado);
        imprimeLista(resultado, caminho);
    }else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDoArquivo) => {
        const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
        // console.log(chalk.blue(`${caminho}/${nomeDoArquivo}`));        
        // console.log(lista);
        const txtEnderecoNome = `${caminho}/${nomeDoArquivo}`;
        imprimeLista(lista, txtEnderecoNome);        
        });
        // console.log(chalk.blue(arquivos));
    } 
}
processaTexto(caminho);