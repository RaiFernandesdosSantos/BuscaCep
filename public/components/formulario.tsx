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
      <div className="rowwrap">
      <label htmlFor="pesquisa">Pesquisar utilizando:</label>
      <select id="pesquisa" value={opcao} onChange={mudarOpcao}>
        <option value="cep">CEP</option>
        <option value="endereco">Endereço</option>
      </select>
      </div>
      {opcao === "cep" && (
        <div className="wrap">
          <div className="input-box">
          <label htmlFor="codigocep">Digite o CEP:</label>
          <input
            type="text"
            name="codigocep"
            id="codigocep"
            placeholder="No formato: 00000-000"
          />
          </div>
        </div>
      )}
      {opcao === "endereco" && (
        <div className="wrap">
          <div className="input-box">
          <label htmlFor="rua">Nome da Rua ou Avenida</label>
          <input type="text" id="rua" name="rua" />
          </div>
          <div className="input-box">
          <label htmlFor="bairro">Bairro ou distrito</label>
          <input type="text" id="bairro" name="bairro" />
          </div>
          <div className="input-box">
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" />
          </div>
          <div className="input-box">
          <label htmlFor="estado">Estado</label>
          <input type="text" id="estado" name="estado" />
          </div>
        </div>
      )}
      <button type="submit" className="pesquisar">
        Buscar
        <FontAwesomeIcon
          icon={faMagnifyingGlassLocation}
          className="iconepesquisar"
        />
      </button>
    </form>
  );
}
