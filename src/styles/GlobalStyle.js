// GlobalStyle.jsx

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`

${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  
  }
 
  body {
    
    margin: 0;
    padding: 0;
    width:100vw;
    height: 100vh;
 
    // color system 

    --main : #64E1CA; 
    --dark-mint: #53D7A4;
    
    --black : #000000;
    --gray600: #222222;
    --gray550: #2f2f2f;
    --gray400:#444444; //light gray
    --gray350:#8e8e8e;
    --gray300 : #a7a7a7;
    --gray250: #c2c2c2; 
    --gray200:#dcdcdc;
    --gray150:#ebebeb;
    --white : #ffffff;

    --font-size-xl: clamp(2rem, 7vw, 5rem); 
    --font-size-lg: clamp(1rem, 6vw, 5rem); 
    --font-size-ml: clamp(1rem, 5vw, 3rem);
    --font-size-md: clamp(1rem, 4vw, 3rem); 
    --font-size-ms: clamp(1rem, 3vw, 2rem); 
    --font-size-sm: clamp(1rem, 2vw, 2rem); 
    --font-size-xs: clamp(0.5rem, 1vw, 2rem); 
    --border-radius : 5px;
  }

 
  
`;

export default GlobalStyle;
