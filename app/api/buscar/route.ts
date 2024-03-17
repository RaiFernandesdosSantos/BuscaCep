export async function POST(req: Request) {
  console.log(req);
  return new Response(JSON.stringify({ text: "Nada da certo" }));
}
