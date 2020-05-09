const { gerarMapa, resolucao } = require("../utils");

module.exports = (router) => {
    router.get("/", (req, res) => {
        const {
            nuvens, aeroportos, linhas, colunas,
        } = req.query;
        const map = gerarMapa(nuvens, aeroportos, linhas, colunas);

        const { diasPrimeiroAeroporto, diasTodosAeroportos, mapa } = resolucao(aeroportos, map);

        return res.send({
            diasPrimeiroAeroporto,
            diasTodosAeroportos,
            mapa,
        });
    });
};
