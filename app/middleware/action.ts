"use server";

export async function buscar(data: FormData) {
  const busca = data.get("rc");

  const res = (await fetch(`https://viacep.com.br/ws/${busca}/json/`)).body;
  console.log(res);
}
