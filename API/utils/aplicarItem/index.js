var models = require("../../models");
var Configs = models.Configs;
var Points = models.Points;

module.exports = function (qtd, mapa, tipo) {
    var linhas = mapa.length || Configs.minimoLinhas;
    var colunas = mapa[0].length || Configs.minimoColunas;

    // Faz um loop pela quantidade de aeroportos
    while (qtd > 0) {
        // Gera cordenadas aletorias para inserir os aeroportos.
        var x = Math.floor(Math.random() * linhas);
        var y = Math.floor(Math.random() * colunas);

        // Seleciona o ponto aleatorio,
        var point = mapa[x][y];

        // Verifica se e possivel inserir um aeroporto, e insere.
        if (point.tipo === Points.vazio) {
            point.tipo = tipo;
            qtd = qtd - 1;
        }
    }
};


