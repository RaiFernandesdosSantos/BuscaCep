interface btnProps {
  texto: string;
  classe: string;
  children: JSX.Element;
}

export default function Button(props: btnProps) {
  return (
    <button className={props.classe}>
      {props.texto}
      {props.children}
    </button>
  );
}
