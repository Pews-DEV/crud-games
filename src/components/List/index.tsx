import * as S from "./styles";
import Card from "../Card";

interface IUserData {
  id: number;
  titulo: string;
  descricao: string;
  desenvolvedor: string;
  publicadora: string;
  data: string;
}

interface IListaProps {
  users: IUserData[];
}

export default function Table(props: IListaProps) {
  return (
    <S.List>
      <Card />
      <Card />
      <Card />
    </S.List>
  );
}
