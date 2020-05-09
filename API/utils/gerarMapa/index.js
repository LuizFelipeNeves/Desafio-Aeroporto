var model = require("../../models");
var Configs = model.Configs;
var Points = model.Points;

var aplicarItem = require("../aplicarItem");

var _novoMapa = function (linhas, colunas) {
    var map = [];
    for (var x = 0; x < linhas; x++) {
        var items = [];
        for (var y = 0; y < colunas; y++) {
            items.push({ x: x, y: y, tipo: Points.vazio });
        }
        map.push(items);
    }
    return map;
};

var gerarMapa = function (nuvens, aeroportos, linhas, colunas) {
    nuvens = nuvens || Configs.minimoNuvens;
    aeroportos = aeroportos || Configs.minimoAeroportos;
    linhas = linhas || Configs.minimoLinhas;
    colunas = colunas || Configs.minimoColunas;

    var map = _novoMapa(linhas, colunas);

    aplicarItem(aeroportos, map, Points.aeroporto);
    aplicarItem(nuvens, map, Points.nuvem);

    return map;
};

module.exports = gerarMapa;
