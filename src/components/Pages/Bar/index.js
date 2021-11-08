import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import routes from "components/Common/Router/constants/routes";

import {StyledBarWrapper} from './styles'

const Bar = ({className}) => (
  <StyledBarWrapper className={className}>
    this is bar page
    <Link to={routes.foo}>go to foo page</Link>
  </StyledBarWrapper>
);

Bar.propTypes = {
  // props
  className: PropTypes.string,
}
Bar.defaultProps = {
  className: '',
}

export default Bar