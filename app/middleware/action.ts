"use server";

import { cookies } from "next/headers";

export async function buscar(fData: FormData) {
  const busca = fData.get("rc");

  const response = await fetch(`https://viacep.com.br/ws/${busca}/json/`);
  const data = await response.json();

  cookies().set("cep", JSON.stringify(data));
}
