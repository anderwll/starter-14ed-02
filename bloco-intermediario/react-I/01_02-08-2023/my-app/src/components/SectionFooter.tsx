import { styled } from "styled-components";

const SectionFooter = styled.footer`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.background};
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    color: ${(props) => props.theme.primary};
    font-size: 30px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary};
    font-size: 20px;
    font-weight: bold;
  }

  span {
    color: ${(props) => props.theme.textColor};
    font-style: italic;
  }
`;

export default SectionFooter;
