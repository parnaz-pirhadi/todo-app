import { css, createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/no-webpack-loader-syntax
import sanitize from '!!raw-loader!sanitize.css';

const additional = css`
  html {
    text-align: left;
    direction: ltr;
    font-size: 62.5%;
    font-family: ${props => props.theme.defaultFont};
    scroll-behavior: smooth;
    * {
      font-family: inherit;
      outline: none;
      text-decoration: none;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${sanitize}
  ${additional}
`;

export default GlobalStyles;
