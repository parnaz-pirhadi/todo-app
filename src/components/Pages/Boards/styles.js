import Styled from 'styled-components';
import {color} from "helpers";

export const StyledBoardsWrapper = Styled.div`
  display: flex;
  height: 100vh;
`;

export const StyledMessage = Styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${color('gray', 'light')};
  font-size: 4.3rem;
  font-weight: bold;
`;

export const StyledBoardsListWrapper = Styled.div`
  height: 100%;
  background-color: ${color('gray', 'dark')};
  padding: 1.8rem;
  width: 32.4rem;
  max-width: 100%;
`;

export const StyledBoardContentWrapper = Styled.div`
  width: calc(100% - 32.4rem);
  padding: 1.8rem;
`;
