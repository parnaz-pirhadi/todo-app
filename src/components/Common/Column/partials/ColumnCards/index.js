import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {cardsActions, cardsSelectors} from "ducks";
import MESSAGES from "constants/messages";
import GLOBALS from "constants/globals";

import Card from "components/Common/Card";
import {CardDetailsForm} from "components/Common/Card/partials";

import {PlusIcon} from "resources/icons";
import {StyledColumnCards, StyledButton} from './styles'

const ColumnCards = ({className, columnId, columnCards, createCard}) => {
  const [isAddCardFormVisible, setIsAddCardFormVisible] = useState(false)


  const handleAddCardSubmit = payload => {
    createCard({
      columnId,
      ...payload,
    });
    handleAddCardFormClose();
  }

  const handleAddCardFormOpen = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsAddCardFormVisible(true);
  }

  const handleAddCardFormClose = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsAddCardFormVisible(false)
  }

  /**
   * group cards based on priorities
   * @type {{}}
   */
  const sortedCards = Object.keys(GLOBALS.CARD_PRIORITIES).reduce((result, key) => {
    const filteredCards = columnCards.filter(card => card.priority === GLOBALS.CARD_PRIORITIES[key]);
    if (filteredCards.length) {
      result[key] = filteredCards;
    }
    return result
  }, {});

  return (
    <StyledColumnCards className={className}>
      {Object.keys(sortedCards).map(key => (
        <div className={key} key={key}>
          {sortedCards[key].map(card => <Card card={card} key={card.id} />)}
        </div>
      ))}

      {!isAddCardFormVisible && (
        <StyledButton
          type="button"
          onClick={handleAddCardFormOpen}
        >
        <span>{MESSAGES.ADD_CARD}</span>
        <PlusIcon width={12} />
        </StyledButton>
      )}

      {isAddCardFormVisible && (
        <CardDetailsForm
          onSubmit={handleAddCardSubmit}
          onCancel={handleAddCardFormClose}
        />
      )}
    </StyledColumnCards>
  )
}

ColumnCards.propTypes = {
  // props
  className: PropTypes.string,
  columnId: PropTypes.number.isRequired,
  // redux
  columnCards: PropTypes.array,
  createCard: PropTypes.func,
}
ColumnCards.defaultProps = {
  className: '',
}

const mapStateToProps = (state, props) => ({
  columnCards: cardsSelectors.getColumnCards(props.columnId)(state),
})

export default connect(mapStateToProps, {
  createCard: cardsActions.createCard
})(ColumnCards)