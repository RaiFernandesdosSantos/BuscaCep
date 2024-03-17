interface btnProps {
  texto: string;
  classe: string;
  children?: React.ReactNode;
  type?: "button" | "submit";
}

export default function Button(props: btnProps) {
  return (
    <button className={props.classe} type={props.type}>
      {props.texto}
      {props.children}
    </button>
  );
}
