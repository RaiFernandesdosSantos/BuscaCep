import button from "../public/style/button.module.css";
import Header from "../public/components/header";
import "../public/style/style.css";

export default function Home() {
  return (
    <div className="container">
      <Header />

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
