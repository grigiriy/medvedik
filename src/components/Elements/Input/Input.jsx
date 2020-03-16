import React from 'react';
import './styles.scss';

function Input(props) {
  let { placeholder, type } = props;
  return (
    <span className="input">
      <label htmlFor={type}>{placeholder}</label>
      <input id={type} />
    </span>
  );
}

export default Input;
