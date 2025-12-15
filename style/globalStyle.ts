import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
    height: 100%;
    width: 100%;
    font-family: var(--font-poppins);
    background-color: #ffffff;
    color: #000000;
    /* -webkit-font-smoothing: antialiased; */
    /* overflow-y: scroll; */
}
`;

export default GlobalStyle;
