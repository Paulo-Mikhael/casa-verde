import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  body{
    background-color: white;
    background-image: url('../public/images/background-image-1.png');
  }
`