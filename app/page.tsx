import Image from "next/image";
import "../public/style/style.css";
import header from "../public/style/header.module.css";
import button from "../public/style/button.module.css";
import logo from "../public/img/logo.png";

export default function Home() {
  return (
    <div className="container">
      <header className={header.header}>
        <Image
          src={logo}
          height={100}
          width={300}
          alt="Logo da API utilizada"
        />
      </header>

      <main className="main">
        <form action="" className="form">
          <h1>Buscar CEP</h1>
          <label htmlFor="rc">Digite um endereço ou logradouro: </label>
          <input
            type="text"
            name="rc"
            id="rc"
            placeholder="Não utilize nº da casa/apt/lote/prédio ou abreviações"
          />

          <button type="submit" className={button.button}>
            Buscar
          </button>
        </form>
      </main>
    </div>
  );
}
