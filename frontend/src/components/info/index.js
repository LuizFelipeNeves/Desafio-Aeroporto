import React from "react";

export default ({ mensagem, valor }) => mensagem && valor ? (<p>{mensagem}: <strong>{valor}</strong></p>) : null