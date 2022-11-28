import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` :root {
    --white: #FFFFFF;

    --background: #F0F2F5;
    --red: #E52E4D;
    --green: #33CC35;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    --gray-800: #29292e;    
    --gray-900: #121214;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background: var(--gray-900);
    color: var(--white);
    -webkit-font-smoothing: antialiased
}

body,
input,
textarea,
button {
    font-weight: 400;
    font: 400 1rem "Roboto", sans-serif
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed
}

`;
