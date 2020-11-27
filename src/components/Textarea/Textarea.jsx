import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

export const Textarea = ({
  isFilled,
  error,
  inputName,
  labelName,
  changeHandler,
  blurHandler,
  value,
}) => (
  <div className="group">
    <textarea
      className={classNames({
        filled: isFilled,
        error: error && error !== 'start',
      })}
      type="text"
      cols="30"
      rows="30"
      name={inputName}
      onChange={changeHandler}
      onBlur={(e) => {
        blurHandler(e.target.name);
      }}
      value={value}
    />
    <label
      className={classNames({
        filled: isFilled,
        error: error && error !== 'start',
      })}
    >
      {labelName}
    </label>
    {error && error !== 'start' && (
      <div>
        <p className="error-message">{error}</p>
      </div>
    )}
  </div>
);

Textarea.propTypes = {
  isFilled: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  blurHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
