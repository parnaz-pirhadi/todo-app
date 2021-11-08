import Styled from 'styled-components'
import {Button} from "components/Globals";
import {color, makeRgba} from "helpers";

export const StyledBoardsList = Styled.div`
  > * {
    &:not(:last-child){
      margin-bottom: 1.8rem;
    }
  }
`;

export const StyledTitle = Styled.h3`
  margin-top: 0;
  font-size: 2.5rem;
  font-weight: normal;
  color: ${color('neutral', 'light')};
`

export const StyledButton = Styled(Button)`
  background-color: ${makeRgba(0.1,  'neutral', 'light')};
  color: ${color('neutral', 'light')};
  font-size: 1.8rem;
  width: 100%;
`