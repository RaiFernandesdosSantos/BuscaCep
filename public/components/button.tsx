interface btnProps {
  texto: string;
  classe: string;
}

export default function Botao(props: btnProps) {
  return <button className={props.classe}>{props.texto}</button>;
}
