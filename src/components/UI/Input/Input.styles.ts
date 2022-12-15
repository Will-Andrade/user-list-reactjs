import styled from "styled-components";

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: .02rem;
  line-height: 1.4;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.4rem;
  border-radius: .5rem;
  padding: .4rem;
  border: .1rem solid #555;
  font-size: 1.4rem;
  color: #333;
  
  &:focus, &:focus:hover {
    outline: none;
    box-shadow: 0 0 .5rem #9c9498;
    border-color: #9c9498;
  }
`;
