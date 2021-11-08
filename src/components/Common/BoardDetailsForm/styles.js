import Styled from 'styled-components'
import {color, makeRgba} from "helpers";
import {Button} from "components/Globals";

export const StyledBoardDetailsForm = Styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  > * {
    &:not(:last-child){
      margin-bottom: 1.8rem;
    }
  }
`;

export const StyledTitle = Styled.h3`
  font-size: 1.4rem;
  color: ${color('neutral', 'light')};
`;


export const StyledButtonsWrapper = Styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledSubmitButton = Styled(Button)`
  color: ${color('neutral', 'light')};
  background-color: ${color("blue", "main")};
`;

export const StyledCancelButton = Styled(Button)`
  color: ${color('neutral', 'light')};
  background-color: ${makeRgba(0.1, "neutral", "light")};
  margin-left: 1.8rem;
`;