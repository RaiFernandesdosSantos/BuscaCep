import Image from "next/image";
import header from "../style/header.module.css";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className={header.header}>
      <Image src={logo} height={100} width={300} alt="Logo da API utilizada" />
    </header>
  );
}
