import styled from "styled-components";

export const Card = styled.div`
  max-width: 380px;
  max-heigth: 260px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Titulo = styled.h1`
  font-size: 22px;
  color: var(--white);
  margin-bottom: 5px;
`;

export const Imagem = styled.img`
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
