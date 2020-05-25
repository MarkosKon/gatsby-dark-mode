import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        font-size: 18px;
        font-family: 'Merriweather', serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Fira Sans', sans-serif;
    }

    .react-toggle--checked .react-toggle-track,
    .react-toggle--checked:hover .react-toggle-track {
         background-color: #000000;
    }

    a {
        color: var(--accent);
    }

    body {
        background-color: var(--bg);
    }

    body[data-theme=light] {
    --bg: white;
    --bgDark: pink;
    --color: black;
    --accent: blue;
    }

    body[data-theme=dark] {
    -webkit-font-smoothing: antialiased;

    --bg: #2c1320;
    --bgDark: #15090f;
    --color: white;
    --accent: #ef86a9;
    }
`
export default GlobalStyle
