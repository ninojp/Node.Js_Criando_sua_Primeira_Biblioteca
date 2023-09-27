import pegaArquivo from "./index.js";
import chalk from 'chalk';
import fs from 'fs';
import listaValidada from "./http-validacao.js";

const caminho = process.argv;
async function imprimeLista(valida, resultado, identificador=''){
    if(valida){
        console.log(chalk.blue.bgWhite('Lista Validada:'),
        chalk.black.bgWhite(identificador),
        await listaValidada(resultado)); 
    }else{
        console.log(chalk.blue.bgWhite(identificador), resultado); 
    }
}

async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';
    // const valida = argumentos[3] === 'valida';
    // console.log(valida);
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
        imprimeLista(valida, resultado, caminho);
    }else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDoArquivo) => {
        const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
        // console.log(chalk.blue(`${caminho}/${nomeDoArquivo}`));        
        // console.log(lista);
        const identificador = `${caminho}/${nomeDoArquivo}`;
        imprimeLista(valida, lista, identificador);        
        });
        // console.log(chalk.blue(arquivos));
    } 
}
processaTexto(caminho);