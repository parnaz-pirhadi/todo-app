import Styled from 'styled-components'
import {Button} from "components/Globals";
import {color} from "helpers";

export const StyledColumnCards = Styled.div``;

export const StyledButton = Styled(Button)`
  width: 100%;
  border: solid 0.2rem ${color('gray', 'main')};
  justify-content: center;
`;