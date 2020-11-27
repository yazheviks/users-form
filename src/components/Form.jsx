/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';

export const Form = ({ initialInputs, initialErrors }) => {
  const [inputs, setInput] = useState(initialInputs);
  const [filled, setFilled] = useState(initialInputs);
  const [errors, setError] = useState(initialErrors);

  const emptyError = 'This field should not be empty';
  const invalidValue = 'Error, please enter a valid value';

  const onChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...inputs,
      [name]: value,
    });

    setError({
      ...errors,
      [name]: '',
    });
  };

  const onBlur = (fieldName) => {
    const inputValue = inputs[fieldName];
    const setErrorText = text => (
      setError({
        ...errors,
        [fieldName]: text,
      })
    );

    if (!inputValue) {
      setErrorText(emptyError);

      return;
    }

    if (fieldName === 'fullName' && inputs[fieldName].match(/[^A-Z]/i)) {
      setErrorText(invalidValue);
    } else if (fieldName === 'email' && !inputs[fieldName].includes('@')) {
      setErrorText(invalidValue);
    } else if (fieldName === 'message' && inputs[fieldName].length < 50) {
      setErrorText(invalidValue);
    } else {
      setErrorText('');
      setFilled({
        ...filled,
        [fieldName]: true,
      });
    }
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    const hasError = Object.values(errors).some(error => !!error);

    if (hasError) {
      return;
    }

    console.log(inputs);
    resetState();
  };

  const resetState = () => {
    setInput(initialInputs);
    setError(initialErrors);
    setFilled(initialInputs);
  };

  const hasErrors = Object.values(errors).some(error => !!error);

  return (
    <form
      className="form form-group"
      onSubmit={handlerSubmit}
    >
      <Select />
      <Input
        isFilled={!!filled.fullName}
        error={errors.fullName}
        inputName="fullName"
        labelName="Full Name"
        changeHandler={onChange}
        blurHandler={onBlur}
        value={inputs.fullName}
      />
      <Input
        isFilled={!!filled.email}
        error={errors.email}
        inputName="email"
        labelName="E-mail"
        changeHandler={onChange}
        blurHandler={onBlur}
        value={inputs.email}
      />
      <Textarea
        isFilled={!!filled.message}
        error={errors.message}
        inputName="message"
        labelName="Message"
        changeHandler={onChange}
        blurHandler={onBlur}
        value={inputs.message}
      />
      <Button hasErrors={hasErrors} />
    </form>
  );
};

Form.propTypes = {
  initialInputs: PropTypes.objectOf(PropTypes.string).isRequired,
  initialErrors: PropTypes.objectOf(PropTypes.string).isRequired,
};
