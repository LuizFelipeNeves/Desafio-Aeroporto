import React, { useState } from "react";
import API from '../../utils/api'
import InfoComponent from '../../components/info'
import MapaComponent from '../../components/mapa'

import './styled.css';

const Home = () => {
  const [nuvens, setNuvens] = useState('');
  const [aeroportos, setAeroportos] = useState('');
  const [colunas, setColunas] = useState('');
  const [linhas, setLinhas] = useState('');
  const [dados, setDados] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await API.get('/', { params: { nuvens, aeroportos, linhas, colunas }});

    setDados({ ...response.data });
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
            <input
            type="number"
            placeholder="Quantidade de nuvens"
            title="Quantidade de nuvens"
            value={nuvens}
            onChange={(e) => setNuvens(e.target.value)}
            />
            <input
            type="number"
            placeholder="Quantidade de aeroportos"
            title="Quantidade de aeroportos"
            value={aeroportos}
            onChange={(e) => setAeroportos(e.target.value)}
            />
            <input
            type="number"
            placeholder="Quantidade de colunas"
            title="Quantidade de colunas"
            value={colunas}
            onChange={(e) => setColunas(e.target.value)}
            />

            <input
            type="number"
            placeholder="Quantidade de linhas"
            title="Quantidade de linhas"
            value={linhas}
            onChange={(e) => setLinhas(e.target.value)}
            />

            <button type="submit">Enviar</button>
        </form>
         <InfoComponent mensagem='Dias para o primeiro aeroporto ser coberto' valor={dados.diasPrimeiroAeroporto}/>
         <InfoComponent mensagem='Dias para todos os aeroportos serem cobertos' valor={dados.diasTodosAeroportos}/>
         <MapaComponent mapa={dados.mapa}/>
      </div>
  );
}

export default Home