const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const chalk = require('chalk');

// Handle -> lidar com/manusear/tratar
function lidarErros(erro) {
    throw new Error(erro.message);
}

// veja os objetos de retorno do fetch, um deles é status...
async function checkStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise.all(arrayURLs
            .map(async url => { const response = await fetch(url); 
            return `${response.status} [${response.statusText}]`;
        }));
        return arrayStatus;
    } catch(erro) {
        lidarErros(erro);
    }
}

function gerarArrayURLs(arrayLinks) {
    return arrayLinks
    .map(objetoLink => Object.values(objetoLink).join());
}

async function validarURLs(arrayLinks) {
    const links = gerarArrayURLs(arrayLinks);
    const statusLinks = await checkStatus(links);
    const results = arrayLinks
    .map((objeto, indice) => ({ ...objeto, status: statusLinks[indice] }));
    return results;

}

module.exports = validarURLs;