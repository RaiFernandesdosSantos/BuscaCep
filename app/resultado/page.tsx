"use client";

import Link from "next/link";
import "@/public/style/style.css";
import Header from "@/public/components/header";
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
            {data?.map((item: any) => (
              <tr key={item.cep}>
                <td>{item.logradouro}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
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
