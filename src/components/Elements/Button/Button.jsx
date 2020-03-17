import React from 'react';
import './styles.scss';

function Button(props) {
  let { children, classList } = props;
  if (classList !== 'file') {
    return <button className={classList}>{children}</button>;
  } else {
    return (
      <button className="btn_wrapper">
        <div className={classList}>{children}</div>
      </button>
    );
  }
}

export default Button;
