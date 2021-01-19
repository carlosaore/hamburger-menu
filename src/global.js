import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.primaryLight};
        color: ${({ theme }) => theme.primaryDark};
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        text-rendering: optimizeLegibility;
    }

    h1 {
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
    }

    a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
    }

    .big-navbar li {
        display : inline-block;
        padding: 2rem 2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.primaryDark};
        list-style-type: none;
        transition: color 0.3s linear;
    }

    @media (min-width : ${({ theme }) => theme.mobile}) {
        .burger-menu {
            display: none
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        .big-navbar {
            display: none
        }
    }

    `