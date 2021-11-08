import React, {useState} from 'react'
import PropTypes from 'prop-types';

import MESSAGES from "constants/messages";

import {
  StyledColumnDetailsForm,
  StyledButtonsWrapper,
  StyledInput,
  StyledTextarea,
  StyledSubmitButton,
  StyledCancelButton,
} from './styles'

const ColumnDetailsForm = ({className, onSubmit, onCancel, column}) => {
  const [title, setTitle] = useState(column ? column.title : '')
  const [description, setDescription] = useState(column ? column.description : '')

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      title,
      description,
    })
  }

  return (
    <StyledColumnDetailsForm className={className} onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder={MESSAGES.TITLE}
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <StyledTextarea
        type="text"
        placeholder={MESSAGES.DESCRIPTION}
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <StyledButtonsWrapper>
        <StyledSubmitButton type="submit">{MESSAGES.SUBMIT}</StyledSubmitButton>
        {onCancel && typeof onCancel ==="function" && (
          <StyledCancelButton type="button" onClick={onCancel}>{MESSAGES.CANCEL}</StyledCancelButton>
        )}
      </StyledButtonsWrapper>
    </StyledColumnDetailsForm>
  )
}

ColumnDetailsForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  column: PropTypes.object,
}
ColumnDetailsForm.defaultProps = {
  className: '',
  onCancel: false,
}

export default ColumnDetailsForm