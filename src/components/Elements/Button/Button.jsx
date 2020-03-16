import React from 'react';
import './styles.scss';

function Button(props) {
  let { children, classList } = props;
  return <button className={classList}>{children}</button>;
}

export default Button;
