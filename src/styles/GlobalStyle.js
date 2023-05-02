// GlobalStyle.jsx

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
const GlobalStyle = createGlobalStyle`

${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  
  }
  :root{
    font-size:10px; // 1rem = 10px; 

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

    

   

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

    --font-size-xl: clamp(2rem, 7vw, 2.5rem); /*35px*/
    --font-size-lg: clamp(1rem, 6vw, 2.5rem); /*30px*/
    --font-size-ml: clamp(1rem, 5vw, 2rem); /*25px*/
    --font-size-md: clamp(1rem, 4vw, 1.5rem); /*20px*/
    --font-size-ms: clamp(1rem, 3vw, 1.5rem); /*15px*/
    --font-size-sm: clamp(1rem, 1vw, 1.5rem); /*10px*/
   
  }

 
  
`;

export default GlobalStyle;
