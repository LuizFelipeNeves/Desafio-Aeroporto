import React from "react";

import './styled.css';

export default ({ mapa }) => mapa ? (<table>
    <tbody>
      { mapa.map((linha, indexLinha) => {
          return (
            <tr key={indexLinha}>
              {linha.map((point, indexColuna) => (
                 <td key={`${indexLinha}-${indexColuna}`}>
                    {point.tipo}
                 </td>
              ))}
            </tr>
          );
        })}
    </tbody>
  </table>) : null