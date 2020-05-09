const { Configs, Points } = require("../../models");

const moverHorizontal = (colunas, map, point, diff) => {
    const y = point.y + diff;
    if (map[point.x][y]) {
        const newPoint = map[point.x][y];
        if (y <= colunas && newPoint.tipo !== Points.nuvem) {
            const novaNuvem = { x: point.x, y, tipo: Points.nuvem };
            map[point.x][y] = novaNuvem;
        }
    }
};

const moverParaBaixo = (linhas, map, point) => {
    const x = point.x + 1;
    if (map[x]) {
        const newPoint = map[x][point.y];
        if (x <= linhas && newPoint.tipo !== Points.nuvem) {
            const novaNuvem = { x, y: point.y, tipo: Points.nuvem };
            map[x][point.y] = novaNuvem;
        }
    }
};

const moverParaCima = (map, point) => {
    const x = point.x - 1;
    if (map[x]) {
        const newPoint = map[x][point.y];
        if (x >= 0 && newPoint.tipo !== Points.nuvem) {
            const novaNuvem = { x, y: point.y, tipo: Points.nuvem };
            map[x][point.y] = novaNuvem;
        }
    }
};

const moverNuvem = (map, point) => {
    const linhas = map.length || Configs.minimoLinhas;
    const colunas = map[0].length || Configs.minimoColunas;

    moverParaCima(map, point);
    moverParaBaixo(linhas, map, point);
    moverHorizontal(colunas, map, point, 1);
    moverHorizontal(colunas, map, point, -1);
};

const avancarDia = (map) => {
    for (let i = 0; i < map.length; i += 1) {
        for (let j = 0; j < map.length; j += 1) {
            const point = map[i][j];
            if (point && point.tipo === Points.nuvem) {
                moverNuvem(map, point);
            }
        }
    }
};

const getTotalAeroportosAbertos = (map) => {
    let total = 0;
    for (let i = 0; i < map.length; i += 1) {
        for (let j = 0; j < map[i].length; j += 1) {
            const point = map[i][j];
            if (point && point.tipo === Points.aeroporto) {
                total += 1;
            }
        }
    }
    return total;
};

const resolucao = (aeroportos, mapa) => {
    let totalAeroportosAbertos = 1;
    let diasPrimeiroAeroporto = 0;
    let diasTodosAeroportos = 0;
    let dias = 1;
    const newMap = JSON.parse(JSON.stringify(mapa));

    while (totalAeroportosAbertos > 0) {
        avancarDia(newMap);

        totalAeroportosAbertos = getTotalAeroportosAbertos(newMap);

        if (
            totalAeroportosAbertos !== aeroportos
            && diasPrimeiroAeroporto <= 0
        ) {
            diasPrimeiroAeroporto = dias;
        } else if (totalAeroportosAbertos === 0) {
            diasTodosAeroportos = dias;
        }
        dias += 1;
    }

    if (diasTodosAeroportos === 0 && diasPrimeiroAeroporto > 0) {
        diasTodosAeroportos = diasPrimeiroAeroporto;
    }

    return {
        diasPrimeiroAeroporto,
        diasTodosAeroportos,
        mapa,
    };
};

module.exports = resolucao;
