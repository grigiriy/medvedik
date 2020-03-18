import React from 'react';

function SelectAttForm(props) {
  if (props.type === 'size') {
    return (
      <span className="grouped" id={props.type}>
        {props.atts.map((item, index) => (
          <span
            className={props.classList}
            key={item}
            onClick={e => {
              props.updateOrderDetails(props.type, item);
              e.target.parentNode.querySelectorAll('span').forEach(e => {
                e.classList.remove('chosen');
              });
              e.target.classList.add('chosen');
            }}
          >
            {item}
          </span>
        ))}
      </span>
    );
  } else {
    return (
      <span className="grouped" id={props.type}>
        {props.atts.map((item, index) => (
          <span
            style={{
              backgroundColor: `${item[1]}`
            }}
            className={props.classList + ' colorItem ' + item[0]}
            key={item}
            onClick={e => {
              props.updateOrderDetails(props.type, item);
              e.target.parentNode.querySelectorAll('span').forEach(e => {
                e.classList.remove('chosen');
              });
              e.target.classList.add('chosen');
            }}
          ></span>
        ))}
      </span>
    );
  }
}

export default SelectAttForm;
