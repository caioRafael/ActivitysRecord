import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  body{
    background: #f7f8fa;
    color: #1f2633;
  }
  
  body, input, button {
    font: 400 1rem "Roboto", sans-serif;
  }
  
  p, span{
    font: 300 1rem "Roboto", sans-serif;
  }
  button{
    border: none;
    cursor: pointer;
  }  
`