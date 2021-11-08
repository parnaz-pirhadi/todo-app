import Styled from 'styled-components'
import {makeRgba} from "helpers";

export const StyledCard = Styled.div`
  margin-bottom: 1.8rem;
  background-color: ${makeRgba(0.04, 'neutral', 'dark')};
  cursor: pointer;
`;

export const StyledTitle = Styled.div`
  border-bottom: solid 0.2rem ${makeRgba(0.1, 'neutral', 'dark')};
  padding: 1.4rem;
  font-size: 1.4rem;
  font-weight: 700;
`;

export const StyledDescription = Styled.div`
  padding: 1.4rem;
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;