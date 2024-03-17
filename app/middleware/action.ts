"use server";

export async function buscar(data: FormData) {
  const busca = data.get("codigocep");

  const res = (await fetch(`https://viacep.com.br/ws/${busca}/json/`)).body;
  console.log(res);
}
