"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function buscar(fData: FormData) {
  cookies().delete("cep");

  if(!fData.get("codigocep")) {
    const rua = fData.get("rua");
    const cidade = fData.get("cidade");
    const estado = fData.get("estado");

    const response = await fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`);
    const data = await response.json();

    console.log(data);

    cookies().set("cep", JSON.stringify(data));
  }
  else{
    const busca = fData.get("codigocep");

    const response = await fetch(`https://viacep.com.br/ws/${busca}/json/`);
    const data = await response.json();

    console.log(data);

    cookies().set("cep", JSON.stringify(data));
  }
  
  redirect("/resultado");
}
