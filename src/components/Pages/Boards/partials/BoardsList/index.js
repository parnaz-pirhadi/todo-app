import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {boardsActions} from "ducks";
import {BoardItem} from "./partials";
import BoardDetailsForm from "components/Common/BoardDetailsForm";

import MESSAGES from "constants/messages";
import {PlusIcon} from "resources/icons";

import {StyledBoardsList, StyledTitle, StyledButton} from './styles'

const BoardsList = ({className, boardsList, createBoard}) => {
  const [isAddBoardFormVisible, setIsAddBoardFormVisible] = useState(false)
  useEffect(() => {
    setIsAddBoardFormVisible(!boardsList.length)
  }, [boardsList])

  const handleAddBoardSubmit = payload => {
    createBoard(payload);
    handleAddBoardClose();
  }

  const handleAddBoardOpen = () => {
    setIsAddBoardFormVisible(true)
  }

  const handleAddBoardClose = () => {
    setIsAddBoardFormVisible(false)
  }

  return (
    <StyledBoardsList className={className}>
      <StyledTitle>{MESSAGES.BOARDS}</StyledTitle>
      {boardsList.map(board => <BoardItem key={board.id} board={board}/>)}
      {!isAddBoardFormVisible && (
        <StyledButton type="button" onClick={handleAddBoardOpen}>
          <span>{MESSAGES.ADD_BOARD}</span>
          <PlusIcon width={16} />
        </StyledButton>
      )}
      {isAddBoardFormVisible && (
        <BoardDetailsForm
          onSubmit={handleAddBoardSubmit}
          onCancel={boardsList.length ? handleAddBoardClose : false}
        />
      )}
    </StyledBoardsList>
  )
}

BoardsList.propTypes = {
  // props
  className: PropTypes.string,
  boardsList: PropTypes.array,
  // redux
  createBoard: PropTypes.func,
}
BoardsList.defaultProps = {
  className: '',
}

export default connect(null, {
  createBoard: boardsActions.createBoard
})(BoardsList)