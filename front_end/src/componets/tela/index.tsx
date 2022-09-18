interface Props {
  children: any;
  titulo: string;
}

export function Tela({ children, titulo }: Props) {
  return (
    <>
      <h3>{titulo}</h3>
      {children}
    </>
  );
}
