import Link from "next/link";
import "@/public/style/style.css";
import Header from "@/public/components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";
import { cookies } from "next/headers";

export default function Home() {
  const data = cookies().get("cep");
  const ardata = data?.value ? JSON.parse(data.value) : null;

  return (
    <div className="container">
      <Header />

      <main className="main">
        <div className="rowwrap">
          <Link href={"/"} className="voltar">
            <FontAwesomeIcon icon={faRotateLeft} className="iconevoltar" />
          </Link>
          <h1>Resultado da pesquisa</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Logradouro/Nome</th>
              <th>Bairro/Distrito</th>
              <th>Localidade/UF</th>
              <th>CEP</th>
            </tr>
          </thead>
          <tbody>
            {ardata && (Array.isArray(ardata) ? 
              ardata.map((item: any, index: any) => (
                <tr key={index}>
                  <td>{item.logradouro}</td>
                  <td>{item.bairro}</td>
                  <td>{`${item.localidade}/${item.uf}`}</td>
                  <td>{item.cep}</td>
                </tr>
              ))
              :
              <tr>
                <td>{ardata.logradouro}</td>
                <td>{ardata.bairro}</td>
                <td>{`${ardata.localidade}/${ardata.uf}`}</td>
                <td>{ardata.cep}</td>
              </tr>
            )}
          </tbody>
        </table>
        <Link href={"/"} className="pesquisar">
          Nova Pesquisa
          <FontAwesomeIcon
            icon={faMagnifyingGlassLocation}
            className="iconevoltar"
          />
        </Link>
      </main>
    </div>
  );
}
