import styled from "styled-components";

export const BaseButton = styled.button`
  font-size: var(--fontsize-large);
  font-weight: var(--fw-regular);
  line-height: 28px;
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  min-width: 50px;
  margin-bottom: var(--spacing);

  transition: filter 0.2s;

  border-radius: 5px;

  padding: 0 var(--spacing-4);

  &:hover {
    filter: brightness(0.9);
  }
`;

export const PrimaryButton = styled(BaseButton)`
  color: var(--white);
  background-color: var(--green-400);
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: var(--black);
  color: var(--white);
  border-radius: 49px;
  padding: 0 16px;
`;
