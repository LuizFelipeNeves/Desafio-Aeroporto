const { Configs, Points } = require("../../models");

module.exports = (qtd, mapa, tipo) => {
    const linhas = mapa.length || Configs.minimoLinhas;
    const colunas = mapa[0].length || Configs.minimoColunas;

    // Faz um loop pela quantidade de aeroportos
    while (qtd > 0) {
        // Gera cordenadas aletorias para inserir os aeroportos.
        const x = Math.floor(Math.random() * linhas);
        const y = Math.floor(Math.random() * colunas);

        // Seleciona o ponto aleatorio,
        const point = mapa[x][y];

        // Verifica se e possivel inserir um aeroporto, e insere.
        if (point.tipo === Points.vazio) {
            point.tipo = tipo;
            qtd -= 1;
        }
    }
};
