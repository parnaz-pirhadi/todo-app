import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, generatePath} from "react-router-dom";

import {boardsActions} from "ducks";
import routes from "components/Common/Router/constants/routes";
import {StyledBoardItem} from './styles'
import BoardDetailsForm from "components/Common/BoardDetailsForm";
import {Button} from "components/Globals";
import MESSAGES from "constants/messages";
import {PenIcon} from "resources/icons";

const BoardItem = ({className, board, updateBoard}) => {
  const {title, id} = board;
  const [isEditBoardFormVisible, setIsEditBoardFormVisible] = useState(false)

  const handleEditBoardSubmit = payload => {
    updateBoard({
      id,
      ...payload
    });
    handleEditBoardClose();
  }

  const handleEditBoardFormOpen = e => {
    if(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsEditBoardFormVisible(true);
  }

  const handleEditBoardClose = e => {
    if(e){
      e.preventDefault();
      e.stopPropagation();
    }
    setIsEditBoardFormVisible(false)
  }

  return (
    <StyledBoardItem className={className}>
      <Link to={generatePath(routes.boards, {boardId: id})}>
        <span>{title}</span>
        {!isEditBoardFormVisible && (
          <Button onClick={handleEditBoardFormOpen} type="button">
            <PenIcon width={12} />
          </Button>
        )}
      </Link>
      {isEditBoardFormVisible && (
        <BoardDetailsForm
          board={board}
          onSubmit={handleEditBoardSubmit}
          onCancel={handleEditBoardClose} />
      )}
    </StyledBoardItem>
  )
}

BoardItem.propTypes = {
  // props
  className: PropTypes.string,
  board: PropTypes.object.isRequired,
  // redux
  updateBoard: PropTypes.func,
}
BoardItem.defaultProps = {
  className: '',
}

export default connect(null, {
  updateBoard: boardsActions.updateBoard
})(BoardItem)