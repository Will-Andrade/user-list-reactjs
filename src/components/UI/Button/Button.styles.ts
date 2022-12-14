import styled from "styled-components";

export const Button = styled.button`
  max-width: 10rem;
  padding: 1rem 2rem;
  color: #fff;
  background: #2b3555;
  border: none;
  border-radius: .5rem;
  transition: background-color .2s ease-in;

  &:hover {
    cursor: pointer;
    background: #404966;
  }
`;
