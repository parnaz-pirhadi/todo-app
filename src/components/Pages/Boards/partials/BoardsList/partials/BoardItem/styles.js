import Styled from 'styled-components'
import {color} from "helpers";

export const StyledBoardItem = Styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: ${color('neutral', 'light')};
    button {
      color: inherit;
    }
  }
`;