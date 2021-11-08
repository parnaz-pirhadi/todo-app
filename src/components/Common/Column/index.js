import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {columnsActions} from "ducks";
import {Button} from "components/Globals";

import {ColumnCards, ColumnDetailsForm} from "./partials";
import {PenIcon} from "resources/icons";
import {
  StyledColumn,
  StyledTitleWrapper,
  StyledTitle,
  StyledColumnContentWrapper
} from './styles'

const Column = ({className, column, updateColumn}) => {
  const {title, description, id, boardId} = column;
  const [isEditColumnFormVisible, setIsEditColumnFormVisible] = useState(false);

  const handleEditColumnSubmit = payload => {
    updateColumn({
      id,
      boardId,
      ...payload
    });
    handleEditColumnFormClose();
  }

  const handleEditColumnFormOpen = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsEditColumnFormVisible(true);
  }

  const handleEditColumnFormClose = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsEditColumnFormVisible(false)
  }


  return (
    <StyledColumn className={className}>
      <StyledTitleWrapper>
        {!isEditColumnFormVisible && (
          <StyledTitle>
            <h3>
              <span>{title}</span>
              <small>{description}</small>
            </h3>
            <Button
              type="button"
              onClick={handleEditColumnFormOpen}
            >
              <PenIcon width={12} />
            </Button>
          </StyledTitle>
        )}
        {isEditColumnFormVisible && (
          <ColumnDetailsForm
            column={column}
            onSubmit={handleEditColumnSubmit}
            onCancel={handleEditColumnFormClose}
          />
        )}
      </StyledTitleWrapper>
      <StyledColumnContentWrapper>
        <ColumnCards columnId={id} />
      </StyledColumnContentWrapper>
    </StyledColumn>
  )
}

Column.propTypes = {
  //props
  className: PropTypes.string,
  column: PropTypes.object.isRequired,
  // redux
  connect: PropTypes.func
}
Column.defaultProps = {
  className: '',
}

export default connect(null, {
  updateColumn: columnsActions.updateColumn
})(Column)