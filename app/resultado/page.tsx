import "../../public/style/style.css";
import Button from "../../public/components/button";
import table from "../../public/style/table.module.css";
import Header from "../../public/components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="container">
      <Header />

      <main className="main">
        <div className="wrap">
          <Button texto="" classe="voltar">
            <FontAwesomeIcon icon={faRotateLeft} className="iconevoltar" />
          </Button>
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
        <Button texto="Nova Pesquisa" classe="pesquisar">
          <FontAwesomeIcon
            icon={faMagnifyingGlassLocation}
            className="iconevoltar"
          />
        </Link>
      </main>
    </div>
  );
}
