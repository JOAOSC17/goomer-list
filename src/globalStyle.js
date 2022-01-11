import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight:normal;
    font-size:16px;
}
  a{
    text-decoration: none;
    color: inherit;
}
`;

export default Global;