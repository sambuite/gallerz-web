import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
  ({ theme }) =>
    css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body,
      #app {
        width: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.palette.background.default};
      }
      *,
      button,
      input {
        border: 0;
        background: none;
        outline: none;
      }
      ul {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
    `,
);
