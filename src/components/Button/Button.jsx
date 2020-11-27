import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

export const Button = ({ hasErrors }) => (
  <button
    type="submit"
    className={classNames({
      disabled: hasErrors,
    })}
  >
    Send
  </button>
);

Button.propTypes = {
  hasErrors: PropTypes.bool.isRequired,
};
