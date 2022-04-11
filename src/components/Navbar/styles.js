import styled from "styled-components";

export const NavContainer = styled.header`
  width: 100%;
  max-heigth: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: var(--spacing-3);

  padding: var(--spacing-3) 72px;

  background-color: var(--purple-800);
`;

export const NavLogo = styled.h1`
  color: var(--white);
  font-size: 30px;
`;
