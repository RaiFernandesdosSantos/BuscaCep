"use client"
import Header from "@/public/components/header";
import "@/public/style/style.css";
import Formulario from "@/public/components/formulario";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Formulario />
      </main>
    </div>
  );
}
