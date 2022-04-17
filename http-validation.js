function gerarArrayURLs(arrayLinks) {
    return arrayLinks.map(
        objetoLink => Object.values(objetoLink).join());
}

function validarURLs(arrayLinks) {
    return gerarArrayURLs(arrayLinks);
}

module.exports = validarURLs;