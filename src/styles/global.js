import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary: #c3073f;
    --dark: #1a1a1d;
    --success: #0197f6;
    --info: #0197f6;
    --error: #f2af29;
    --warning: #f2af29;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* html{
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  } */
  html, body, #root{
    height: 100%;
  }

  body{
    background: var(--dark);
  }
  
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }
  
`;
