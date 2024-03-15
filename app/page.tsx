"use client";

import button from "../public/style/button.module.css";
import Button from "../public/components/button";
import Header from "../public/components/header";
import "../public/style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <form action="" className="form">
          <h1>Buscar CEP</h1>
          <div className="wrap">
            <label htmlFor="rc">Pesquisar utilizando:</label>
            <select name="tipo" id="">
              <option value="cep" selected>
                CEP
              </option>
              <option value="endereco">Endereço</option>
            </select>
          </div>
          <input
            type="text"
            name="rc"
            id="rc"
            placeholder="No formato: 00000-000"
          />
          <Button texto="Buscar" classe={button.pesquisar}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassLocation}
              className={button.iconepesquisar}
            />
          </Button>
        </form>
      </main>
    </div>
  );
}
