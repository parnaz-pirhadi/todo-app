import Styled from 'styled-components'
import {color} from "helpers";
import {Button} from "components/Globals";
import {ColumnDetailsForm} from "components/Common/Column/partials";

export const StyledBoardContent = Styled.div``;

export const StyledBoardTitle = Styled.div`
  background: ${color('gray', 'light')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;
  border-radius: 0.9rem;
`;

export const StyledTitle = Styled.h2`
  margin: 0;
  font-size: 2.5rem;
  font-weight: normal;
`;

export const StyledButton = Styled(Button)`
  background-color: ${color('blue', 'main')};
  color: ${color('neutral', 'light')};
  font-size: 1.1rem;
`;

export const StyledBoardColumnsWrapper = Styled.div`
  display: flex;
  overflow-y: auto;
  margin-top: 1.8rem;
  > * {
    width: 27.0rem;
    flex: 0 0 auto;
    &:not(:last-child){
      margin-right: 3.6rem;
    }
  }
`;

export const StyledColumnDetailsForm = Styled(ColumnDetailsForm)`
  padding: 1.8rem;
  border-radius: 0.7rem;
  background-color: ${color('gray', 'light')};
`;