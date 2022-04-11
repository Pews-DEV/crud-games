import styled from "styled-components";

export const Form = styled.div`
  max-width: 100%;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const Formbody = styled.form``;

export const LabelForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const LabelFormInput = styled.input`
  border-width: 1px;
  border-style: solid;
  border-color: #aaa;
  border-radius: 4px;
  box-shadow: 0 0 8px -3px #888;
`;
