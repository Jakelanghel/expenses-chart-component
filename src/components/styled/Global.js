import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        // Primary
        --red: hsl(10, 79%, 65%);
        --cyan: hsl(186, 34%, 60%);
        // Neutral
        --dark-brown: hsl(25, 47%, 15%);
        --med-brown: hsl(28, 10%, 53%);
        --cream: hsl(27, 66%, 92%);
        --very-pale-orange: #F7E9DC;
        --white: #fff;

    }

    * {
        box-sizing:border-box;
        font-family: 'DM Sans', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--very-pale-orange);

    }
    

    h1,
    h2,
    h3,
    p {
        margin: 0;
        padding: 0;
    }

`;

export default GlobalStyles;
