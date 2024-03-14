import "../../public/style/style.css";
import button from "../../public/style/button.module.css";
import table from "../../public/style/table.module.css";
import Header from "../../public/components/header";

export default function Home() {
  return (
    <div className="container">
      <Header />

      <main className="main">
        <div className="wrap">
          <button className={button.voltar}></button>
          <h1>Resultado da pesquisa</h1>
        </div>
        <table className={table.table}>
          <thead className={table.thead}>
            <tr className={table.tr}>
              <th className={table.th}>Logradouro/Nome</th>
              <th className={table.th}>Bairro/Distrito</th>
              <th className={table.th}>Localidade/UF</th>
              <th className={table.th}>CEP</th>
            </tr>
          </thead>
          <tbody className={table.tbody}>
            <tr className={table.tr}>
              <td className={table.td}>Rua Fagundes Varela</td>
              <td className={table.td}>Jardim Dourados</td>
              <td className={table.td}>Três Lagoas/MS</td>
              <td className={table.td}>79641-120</td>
            </tr>
          </tbody>
        </table>
        <button className={button.button}>Nova Pesquisa</button>
      </main>
    </div>
  );
}
