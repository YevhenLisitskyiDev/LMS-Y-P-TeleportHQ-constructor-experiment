import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
.loading {
  margin: 2em auto;
  
  background: lightgrey;
  position: relative;
  
  &::after {
    content: '';
    // position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -30px;  
    margin-left: -30px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 5px solid grey;
    border-top-color: black;
    animation: loading 2s linear infinite;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export default GlobalStyle;
