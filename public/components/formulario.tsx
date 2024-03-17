"use client";

import { useState } from "react";
import { buscar } from "@/app/middleware/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

export default function Formulario() {
  const [opcao, setOpcao] = useState("cep");

  const mudarOpcao = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOpcao(event.target.value);
  };

  return (
    <form className="form" action={buscar}>
      <label htmlFor="pesquisa">Pesquisar utilizando:</label>
      <select id="pesquisa" value={opcao} onChange={mudarOpcao}>
        <option value="cep">CEP</option>
        <option value="endereco">Endereço</option>
      </select>
      {opcao === "cep" && (
        <div className="wrap">
          <label htmlFor="codigocep">Digite o CEP:</label>
          <input
            type="text"
            name="codigocep"
            id="codigocep"
            placeholder="No formato: 00000-000"
          />
        </div>
      )}
      {opcao === "endereco" && (
        <div className="wrap">
          <label htmlFor="rua">Nome da Rua ou Avenida</label>
          <input type="text" id="rua" name="rua" />
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" />
          <label htmlFor="estado">Estado</label>
          <input type="text" id="estado" name="estado" />
        </div>
      )}
      <button type="submit" className="pesquisar">
        <FontAwesomeIcon
          icon={faMagnifyingGlassLocation}
          className="iconepesquisar"
        />
      </button>
    </form>
  );
}
