const chalk = require('chalk');
const leiaArquivo = require('./main');
const validarURLs = require('./http-validation');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await leiaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow(`Links validados: \n`), await validarURLs(resultado));
    } else {
        console.log(chalk.yellow(`Lista de links:\n`), resultado);
    }
}

processaTexto(caminho);
