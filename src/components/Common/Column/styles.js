import Styled from 'styled-components'
import {color, makeRgba} from "helpers";

export const StyledColumn = Styled.div`
  background-color: ${color('gray', 'light')};
  border-radius: 0.7rem;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  >  {
    width: 100%;
  }
`;

export const StyledTitleWrapper = Styled.div`
`;

export const StyledTitle = Styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h3 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: normal;
    > * {
      display: block;
    }
  }
`;

export const StyledColumnContentWrapper = Styled.div`
  background-color: ${makeRgba(0.2, 'neutral', 'light')};
  flex: 1;
  padding: 0.7rem;
  margin-top: 0.7rem;
`;