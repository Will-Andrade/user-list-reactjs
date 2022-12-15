import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 30vh;
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: #fff;
  border-radius: .5rem;
  max-width: 60rem;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const Header = styled.header`
  background: #2b3555;
  padding: 1.5rem;
  font-size: 1.4rem;
  line-height: 1.2;
  letter-spacing: .03rem;
  color: #fff;
`;

export const Content = styled.main`
  padding: 1.5rem;
  font-size: 1.4rem;
  letter-spacing: .02rem;
`;

export const Footer = styled.footer`
  padding: 1.5rem;
  display: flex;
  justify-content: flex-end;
`;
