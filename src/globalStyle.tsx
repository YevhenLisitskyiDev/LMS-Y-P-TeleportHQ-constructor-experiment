import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}


body {
  position: relative;
}
`;

export default GlobalStyle;
