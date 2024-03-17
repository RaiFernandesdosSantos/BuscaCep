import Header from "@/public/components/header";
import "@/public/style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { buscar } from "./middleware/action";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <form action={buscar}>
          <h1>Buscar CEP</h1>
          <label htmlFor="rc">Digite o CEP que deseja pesquisar:</label>
          <input
            type="text"
            id="rc"
            name="rc"
            placeholder="Digite somente os numeros"
          />
          <button type="submit" className="pesquisar">
            Buscar
            <FontAwesomeIcon
              icon={faMagnifyingGlassLocation}
              className="iconepesquisar"
            />
          </button>
        </form>
      </main>
    </div>
  );
}
