var model = require("../../models");
var Configs = model.Configs;
var Points = model.Points;

var _avancarDia = function (map) {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map.length; j++) {
            var point = map[i][j];
            if (point && point.tipo === Points.nuvem) {
                moverNuvem(map, point);
            }
        }
    }
};

function moverNuvem(map, point) {
    var linhas = map.length || Configs.minimoLinhas;
    var colunas = map[0].length || Configs.minimoColunas;

    moverParaCima(map, point);
    moverParaBaixo(linhas, map, point);
    moverHorizontal(colunas, map, point, 1);
    moverHorizontal(colunas, map, point, -1);
}

function moverHorizontal(colunas, map, point, diff) {
    var y = point.y + diff;
    if (map[point.x][y]) {
        var newPoint = map[point.x][y];
        if (y <= colunas && newPoint.tipo !== Points.nuvem) {
            var novaNuvem = { x: point.x, y: y, tipo: Points.nuvem };
            map[point.x][y] = novaNuvem;
        }
    }
}

function moverParaBaixo(linhas, map, point) {
    var x = point.x + 1;
    if (map[x]) {
        var newPoint = map[x][point.y];
        if (x <= linhas && newPoint.tipo !== Points.nuvem) {
            var novaNuvem = { x: x, y: point.y, tipo: Points.nuvem };
            map[x][point.y] = novaNuvem;
        }
    }
}

function moverParaCima(map, point) {
    var x = point.x - 1;
    if (map[x]) {
        var newPoint = map[x][point.y];
        if (x >= 0 && newPoint.tipo !== Points.nuvem) {
            var novaNuvem = { x: x, y: point.y, tipo: Points.nuvem };
            map[x][point.y] = novaNuvem;
        }
    }
}

var getTotalAeroportosAbertos = function (map) {
    var total = 0;
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            var point = map[i][j];
            if (point && point.tipo === Points.aeroporto) {
                total = total + 1;
            }
        }
    }
    return total;
};

var resolucao = function (aeroportos, mapa) {
    var totalAeroportosAbertos = 1;
    var diasPrimeiroAeroporto = 0;
    var diasTodosAeroportos = 0;
    var dias = 1;
    var newMap = JSON.parse(JSON.stringify(mapa));

    while (totalAeroportosAbertos > 0) {
        _avancarDia(newMap);

        totalAeroportosAbertos = getTotalAeroportosAbertos(newMap);

        if (
            totalAeroportosAbertos !== aeroportos &&
            diasPrimeiroAeroporto <= 0
        ) {
            diasPrimeiroAeroporto = dias;
        } else if (totalAeroportosAbertos === 0) {
            diasTodosAeroportos = dias;
        }
        dias++;
    }

    if (diasTodosAeroportos === 0 && diasPrimeiroAeroporto > 0) {
        diasTodosAeroportos = diasPrimeiroAeroporto;
    }

    return {
        diasPrimeiroAeroporto: diasPrimeiroAeroporto,
        diasTodosAeroportos: diasTodosAeroportos,
        mapa: mapa
    };
};

module.exports = resolucao;
