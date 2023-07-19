import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['base-input']};
    }
    body {
        background: ${({ theme }) => theme.colors['base-background']};
        color: ${({ theme }) => theme.colors['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fonts.regular} ;
        font-weight: 400;
        font-size: ${({ theme }) => theme.textSizes.medium} ;
    }
    button {
        cursor: pointer;
    }
`
