"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function buscar(fData: FormData) {
  const busca = fData.get("codigocep");

  const response = await fetch(`https://viacep.com.br/ws/${busca}/json/`);
  const data = await response.json();

  cookies().set("cep", JSON.stringify(data));

  redirect("/resultado");
}
