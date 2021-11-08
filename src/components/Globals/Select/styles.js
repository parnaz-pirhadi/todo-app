import Styled from 'styled-components'
import {color} from "helpers";

export const StyledSelect = Styled.select`
  padding: 0.7rem;
  font-size: 1.4rem;
  width: 100%;
  border: solid 0.2rem ${color('gray', 'main')};
  > * {
    padding: inherit;
  }
`;