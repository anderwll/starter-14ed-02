import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
        font-weight: bold;
        color: #ffff;
        font-size: 50px;
    }
`;

export default GlobalStyled;
