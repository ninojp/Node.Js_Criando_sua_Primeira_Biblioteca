import chalk from "chalk";

function extraiLinks(arrayLinks){
    return arrayLinks.map((objLinks) => Object.values(objLinks).join())
}
//--------------------------------------------------------------------------------------
// Esta parte foi feita durante a aula.  
// async function checaStatus(listaURLs){
//     const arrayStatus = Promise.all(
//         listaURLs.map(async (url) => {
//         const response = await fetch(url);
//         return response.status;
//     })
//     )
//     return arrayStatus;
// }
//--------------------------------------------------------------------------------------
// Em nosso código(aula5), para checar o status code de uma maneira mais performática,
//podemos seguir com o exemplo abaixo:
// Note que inserimos o { method: 'HEAD' } explicitamente no parâmetro da funçãofetch,
//pois se enviarmos apenas a url, fetch irá automaticamente utilizar o método GET. 
// Dessa forma, garantimos que body virá com o valor null em nossa requisição.
async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
          try {
            const response = await fetch(url, { method: 'HEAD' })
            // console.log(response)
            if(response.status ===200){
                return `${response.status} - ${response.statusText}, 'Link OK!'`;
            }else if(response.status ===404){
                return `${response.status} - ${response.statusText}, 'Link FORA DO AR!!!'`;
            }
            return response.status;
          } catch (erro) {
            return manejaErros(erro);
          }
        })
      )
    return arrStatus;
}
function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        // let erroTxt = console.log(chalk.red('link não encontrado'))
        return 'Link não encontrado!';
    }else{
        return 'Algo deu Errado!';
    }
    // console.log(chalk.red('Algo deu Errado!'), erro)
}
//--------------------------------------------------------------------------------------
export default async function listaValidada(listaDeLinks){
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    // console.log(status);
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        StatusCode: status[indice],
    }))
    // return status;
}
//--------------------------------------------------------------------------------------
