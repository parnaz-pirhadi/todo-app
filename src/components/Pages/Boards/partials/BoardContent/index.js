import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {columnsActions, columnsSelectors} from "ducks";
import MESSAGES from "constants/messages"
import Column from "components/Common/Column";

import {PlusIcon} from "resources/icons";
import {
  StyledBoardContent,
  StyledBoardTitle,
  StyledBoardColumnsWrapper,
  StyledTitle,
  StyledButton,
  StyledColumnDetailsForm,
} from './styles';

const BoardContent = ({className, boardColumns, board, createColumn}) => {
  const {title} = board;
  const [isAddColumnFormVisible, setIsAddColumnFormVisible] = useState(false);

  useEffect(() => {
    setIsAddColumnFormVisible(!boardColumns.length)
  }, [boardColumns])


  const handleAddColumnSubmit = payload => {
    createColumn({
      boardId: board.id,
      ...payload
    });
    handleAddColumnFormClose();
  }

  const handleAddColumnFormOpen = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsAddColumnFormVisible(true);
  }

  const handleAddColumnFormClose = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsAddColumnFormVisible(false)
  }

  return (
    <StyledBoardContent className={className}>
      <StyledBoardTitle>
        <StyledTitle>{title}</StyledTitle>
        {!isAddColumnFormVisible && (
          <StyledButton
            type="button"
            onClick={handleAddColumnFormOpen}
          >
            <span>{MESSAGES.ADD_COLUMN}</span>
            <PlusIcon width={16}/>
          </StyledButton>
        )}
      </StyledBoardTitle>
      <StyledBoardColumnsWrapper>
        {!!boardColumns.length && boardColumns.map(column => (
          <Column column={column} key={column.id}/>
        ))}

        {isAddColumnFormVisible && (
          <StyledColumnDetailsForm
            onSubmit={handleAddColumnSubmit}
            onCancel={boardColumns.length ? handleAddColumnFormClose : false}
          />
        )}
      </StyledBoardColumnsWrapper>
    </StyledBoardContent>
  )
}

BoardContent.propTypes = {
  //props
  className: PropTypes.string,
  board: PropTypes.object.isRequired,
  //redux
  boardColumns: PropTypes.array,
  createColumn: PropTypes.func,
}
BoardContent.defaultProps = {
  className: '',
}

const mapStateToProps = (state, props) => ({
  boardColumns: columnsSelectors.getBoardColumns(props.board.id)(state)
})

export default connect(mapStateToProps, {
  createColumn: columnsActions.createColumn
})(BoardContent)