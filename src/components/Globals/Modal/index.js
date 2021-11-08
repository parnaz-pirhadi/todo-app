import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledModal,
  StyledBackDrop,
  StyledModalContentWrapper,
  StyledModalContent,
  StyledBackDropShadow,
  StyledCloseButton
} from './styles'
import {CrossIcon} from "resources/icons";

const Modal = ({className, onClose, children}) => {
  const hasCloseButton = onClose && typeof onClose === "function";
  const handleClose = () => {
    if (hasCloseButton) {
      onClose();
    }
  }

  return (
    <StyledModal className={className}>
      <StyledBackDropShadow/>
      <StyledBackDrop onClick={handleClose}>
      <StyledModalContentWrapper onClick={e => e.stopPropagation()}>
        {hasCloseButton && (
          <StyledCloseButton onClick={handleClose} type="button">
            <CrossIcon width={14} />
          </StyledCloseButton>
        )}
        <StyledModalContent>
          {children}
        </StyledModalContent>
      </StyledModalContentWrapper>
      </StyledBackDrop>
    </StyledModal>
  )
}

Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
}
Modal.defaultProps = {
  className: ''
}

export default Modal;