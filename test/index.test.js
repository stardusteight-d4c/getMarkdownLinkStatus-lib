const leiaArquivo = require('../main');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
];

describe('leiaArquivo::', () => {
    it('deverá ser uma função', () => {
        expect(typeof leiaArquivo).toBe('function');
    })
    it('deverá retornar array de links como resultado', async () => {
        const result = await leiaArquivo('test/arquivos/text.md');
        expect(result).toEqual(arrayResult);
    })
    it('deverá retornar mensagem que não há links', async () => {
        const result = await leiaArquivo('test/arquivos/textNull.md');
        expect(result).toBe('Nenhum link no formato Markdown');
    })
});
