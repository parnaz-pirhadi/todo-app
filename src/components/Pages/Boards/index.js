import React  from 'react';
import {connect} from 'react-redux'
import {useParams}  from 'react-router-dom';
import PropTypes from 'prop-types';

import {boardsUtils, boardsSelectors} from "ducks";

import {BoardsList, BoardContent} from './partials'
import {
  StyledBoardsWrapper,
  StyledMessage,
  StyledBoardsListWrapper,
  StyledBoardContentWrapper,
} from './styles';
import MESSAGES from "constants/messages";

const Boards = ({ className, boardsList }) => {
  const {boardId} = useParams();
  const board = boardsUtils.findBoard(boardsList, boardId);

  const renderBoardContent = () => {
    if(!boardsList.length){
      return <StyledMessage>{MESSAGES.ADD_BOARD}</StyledMessage>
    }
    else if(!boardId){
      return <StyledMessage>{MESSAGES.SELECT_BOARD}</StyledMessage>
    }
    else if(!board){
      return <StyledMessage>{MESSAGES.BOARD_NOT_FOUND}</StyledMessage>
    }

    return <BoardContent board={board} />
  }

  return (
    <StyledBoardsWrapper className={className}>
      <StyledBoardsListWrapper>
        <BoardsList boardsList={boardsList} />
      </StyledBoardsListWrapper>
      <StyledBoardContentWrapper>
        {renderBoardContent()}
      </StyledBoardContentWrapper>
    </StyledBoardsWrapper>
  );
};

Boards.propTypes = {
  // props
  className: PropTypes.string,
  // redux
  boardsList: PropTypes.array,
};
Boards.defaultProps = {
  className: '',
};

const mapStateToProps = state => ({
  boardsList: boardsSelectors.getBoardsList(state)
})

export default connect(mapStateToProps)(Boards);
