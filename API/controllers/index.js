var model = require("../utils");
var gerarMapa = model.gerarMapa;
var resolucao = model.resolucao;

module.exports = function (router) {
    router.get("/", function (req, res) {
        var nuvens = req.query.nuvens;
        var aeroportos = req.query.aeroportos;
        var linhas = req.query.linhas;
        var colunas = req.query.colunas;

        var map = gerarMapa(nuvens, aeroportos, linhas, colunas);

        var response = resolucao(aeroportos, map);

        return res.send({
            diasPrimeiroAeroporto: response.diasPrimeiroAeroporto,
            diasTodosAeroportos: response.diasTodosAeroportos,
            mapa: response.mapa
        });
    });
};
