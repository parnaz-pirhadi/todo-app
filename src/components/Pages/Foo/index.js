import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import routes from "components/Common/Router/constants/routes";

import {StyledFooWrapper} from './styles'

const Foo = ({className}) => (
  <StyledFooWrapper className={className}>
    this is foo page
    <Link to={routes.bar}>go to bar page</Link>
  </StyledFooWrapper>
);

Foo.propTypes = {
  // props
  className: PropTypes.string,
}
Foo.defaultProps = {
  className: '',
}

export default Foo