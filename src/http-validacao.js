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
async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
          try {
            const response = await fetch(url, { method: 'HEAD' })
            console.log(response)
            return response.status;
          } catch (erro) {
            return trataErro(erro);
          }
        })
      )
    return arrStatus;
}
//--------------------------------------------------------------------------------------
export default async function listaValidada(listaDeLinks){
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    // console.log(status);
    return status;
}
//--------------------------------------------------------------------------------------
// [gatinho salsicha](http://gatinhosalsicha.com.br/)