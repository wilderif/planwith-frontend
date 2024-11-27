import styled from "styled-components";
import "@/index.css";

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const DateInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid var(--color-gray-light);
  padding: 0.5rem;
  color: var(--color-black);
  outline: none;
  transition: 0.3s;

  &:focus {
    border-bottom: 1px solid var(--color-primary);
  }

  &::placeholder {
    color: var(--color-gray-light);
  }
`;