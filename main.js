const chalk = require('chalk');
const fs = require('fs');

function extrairLinks(txt) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm; //Global e Multiline
  const arrayResultados = [];
  let tempArrayOcorrencias;
  while ((tempArrayOcorrencias = regex.exec(txt)) !== null) {
    arrayResultados.push({ [tempArrayOcorrencias[1]]: tempArrayOcorrencias[2] })
  }
  return arrayResultados.length === 0 ? 'Nenhum link no formato Markdown' : arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Caminho inválido ou arquivo não existe!'));
}

async function leiaArquivo(caminhoDoArquivo) {
  try {
    const txt = await fs.promises.readFile(caminhoDoArquivo, 'utf-8');
    return extrairLinks(txt);
  } catch (erro) {
    trataErro(erro);
  }
}

module.exports = leiaArquivo;
