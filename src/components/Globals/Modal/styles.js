import Styled from 'styled-components'
import {color, makeRgba} from "helpers";
import {Button} from "components/Globals/index";

export const StyledModal = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 10000;
`;

export const StyledBackDropShadow = Styled(StyledModal)`
  background-color: ${makeRgba(0.3, 'neutral', 'dark')};
`;

export const StyledBackDrop = Styled(StyledModal)``;

export const StyledModalContentWrapper = Styled.div`
  max-width: 100%;
  width: 54.0rem;
  position: relative;
  margin: 0 auto;
  top: 18.0rem;
  border-radius: 0.9rem;
  background-color: ${color('neutral', 'light')};
  padding: 1.8rem;
  z-index: 10002
`;

export const StyledModalContent = Styled.div``;

export const StyledCloseButton = Styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;