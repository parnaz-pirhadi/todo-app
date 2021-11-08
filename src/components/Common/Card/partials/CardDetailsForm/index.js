import React, {useState} from 'react'
import PropTypes from 'prop-types';

import MESSAGES from "constants/messages";
import GLOBALS from "constants/globals";

import {
  StyledCardDetailsForm,
  StyledButtonsWrapper,
  StyledCancelButton,
  StyledInput,
  StyledSelect,
  StyledSubmitButton,
  StyledTextarea,
} from './styles'

const CardDetailsForm = ({className, onSubmit, onCancel, card, boardColumns}) => {
  const [title, setTitle] = useState(card ? card.title : '')
  const [description, setDescription] = useState(card ? card.description : '')
  const [priority, setPriority] = useState(card ? card.priority : GLOBALS.CARD_PRIORITIES.MEDIUM)
  const [columnId, setColumnId] = useState(card ? card.columnId : null)

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      title,
      description,
      priority,
    };
    /**
     * if card has column id,
     * it means that card is already created and user is editing it
     */
    if(columnId){
      payload.columnId = columnId
    }

    onSubmit(payload)
  }

  return (
    <StyledCardDetailsForm className={className} onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder={MESSAGES.TITLE}
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <StyledSelect
        value={priority}
        onChange={e => setPriority(e.target.value)}
        required
      >
        {Object.values(GLOBALS.CARD_PRIORITIES).map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </StyledSelect>

      {!!boardColumns.length && (
        /**
         * show columns dropdown only on edit mote
         */
        <StyledSelect
          value={columnId}
          onChange={e => setColumnId(e.target.value)}
          required
        >
          {boardColumns.map(column => (
            <option key={column.id} value={column.id}>{column.title}</option>
          ))}
        </StyledSelect>
      )}

      <StyledTextarea
        type="text"
        placeholder={MESSAGES.DESCRIPTION}
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <StyledButtonsWrapper>
        <StyledSubmitButton type="submit">{MESSAGES.SUBMIT}</StyledSubmitButton>
        <StyledCancelButton type="button" onClick={onCancel}>{MESSAGES.CANCEL}</StyledCancelButton>
      </StyledButtonsWrapper>
    </StyledCardDetailsForm>
  )
}

CardDetailsForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  boardColumns: PropTypes.array,
}
CardDetailsForm.defaultProps = {
  className: '',
  boardColumns: [],
}

export default CardDetailsForm