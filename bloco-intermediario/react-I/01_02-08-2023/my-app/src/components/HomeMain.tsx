import { styled } from "styled-components";

const HomeMain = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

export default HomeMain;
