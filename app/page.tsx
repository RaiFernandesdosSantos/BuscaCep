"use client";

import Button from "../public/components/button";
import Header from "../public/components/header";
import "../public/style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { buscar } from "./middleware/action";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <form className="form" action={buscar}>
          <h1>Buscar CEP</h1>
          <input
            type="text"
            name="rc"
            id="rc"
            placeholder="No formato: 00000-000"
          />
          <Button texto="Buscar" classe="pesquisar">
            <FontAwesomeIcon
              icon={faMagnifyingGlassLocation}
              className="iconepesquisar"
            />
          </Button>
        </form>
      </main>
    </div>
  );
}
