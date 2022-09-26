import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
          --black: #080708;
          --black-200: #201f20;
          --orange: #FF5722;
          --red: #e52e4d;
          --blue: #161b22;
          --blue-light: #6933ff;
          --white: #FFFFFF;
          --white-200: #DDDDDD;
          --text-body: #969cb3;
          --shape: #202020;
          --green: #00e676;
        }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        
    }
    a{
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }

    body{
       background-color: var(--black);
    input {
        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }   

    }

`;
