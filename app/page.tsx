import Image from "next/image";
import "../public/style/style.css";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <Image
          src="../public/img/next.svg"
          height={100}
          width={100}
          alt="Picture of the author"
        />
      </header>

      <main className="main">
        <form action="" className="form">
          <h1>Buscar Cep</h1>
          <label htmlFor="rc">Digite um CEP ou Endereco: </label>

          <input
            type="text"
            name="rc"
            id="rc"
            placeholder="Nao utilize numero da casa/apt/lote/predio ou apreviacoes."
          />

          <button type="submit">Buscar</button>
        </form>
      </main>
    </div>
  );
}
