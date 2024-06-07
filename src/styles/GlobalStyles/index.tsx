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
  h1, h2, h3{
    color: #9c9c9c;
    font-weight: 400;
  }
  h1, h2{
    font-size: 25px;

    b{
      font-weight: 900;
      font-size: 82px;
      font-family: 'Elsie Swash Caps', sans-serif;
      color: #202020;
    }
  }
`