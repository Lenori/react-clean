import {createGlobalStyle} from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    :root {
        --primary: #000000;
        --secondary: #58595b;
        --tertiary: #ffffff;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;

        .react-datepicker-wrapper {
            width: 100%;
        }
    }

    body, input, button {
        font: 14px 'Lato', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;