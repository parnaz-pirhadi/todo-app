import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { connect, useSelector } from "react-redux";

import {columnsSelectors, cardsActions} from "ducks";

import {Modal} from "components/Globals";
import {CardDetailsForm} from "./partials";
import {StyledCard, StyledTitle, StyledDescription} from './styles'

const Card = ({className, card, updateCard}) => {
  const {id, title, description, columnId} = card;
  const [isEditCardFormVisible, setIsEditCardFormVisible] = useState(false);

  /**
   * get sibling columns of the parent column to render in card
   */
  const {boardId} = useSelector(columnsSelectors.getColumn(columnId))
  const boardColumns = useSelector(columnsSelectors.getBoardColumns(boardId))

  const handleEditCardSubmit = payload => {
    updateCard({
      id,
      ...payload
    });
    handleEditCardClose();
  }

  const handleEditCardFormOpen = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsEditCardFormVisible(true);
  }

  const handleEditCardClose = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsEditCardFormVisible(false)
  }

  return (
    <>
      <StyledCard className={className} onClick={handleEditCardFormOpen}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledCard>
      {isEditCardFormVisible && (
        <Modal onClose={handleEditCardClose}>
          <CardDetailsForm
            onSubmit={handleEditCardSubmit}
            onCancel={handleEditCardClose}
            card={card}
            boardColumns={boardColumns}
          />
        </Modal>
      )}
    </>
  )
}

Card.propTypes = {
  // props
  className: PropTypes.string,
  card: PropTypes.object.isRequired,
}
Card.defaultProps = {
  className: '',
}

export default connect(null, {
  updateCard: cardsActions.updateCard
})(Card)