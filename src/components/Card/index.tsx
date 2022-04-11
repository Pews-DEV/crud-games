import * as S from "./styles";

import imgmhw from "../../assets/mhw.jpeg";

export default function Card() {
  return (
    <>
      <S.Card>
        <S.Titulo>Monster Hunter</S.Titulo>
        <S.Imagem src={imgmhw} alt="monster hunter" />
      </S.Card>
    </>
  );
}
