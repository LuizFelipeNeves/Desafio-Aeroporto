const { Configs, Points } = require("../../models");

const aplicarItem = require("../aplicarItem");

const novoMapa = (linhas, colunas) => {
    const map = [];
    for (let x = 0; x < linhas; x += 1) {
        const items = [];
        for (let y = 0; y < colunas; y += 1) {
            items.push({ x, y, tipo: Points.vazio });
        }
        map.push(items);
    }
    return map;
};

const gerarMapa = (
    nuvens = Configs.minimoNuvens,
    aeroportos = Configs.minimoAeroportos,
    linhas = Configs.minimoLinhas,
    colunas = Configs.minimoColunas,
) => {
    const map = novoMapa(linhas, colunas);

    aplicarItem(aeroportos, map, Points.aeroporto);
    aplicarItem(nuvens, map, Points.nuvem);

    return map;
};

module.exports = gerarMapa;
