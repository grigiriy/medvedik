import React from 'react';

function PriceForm(props) {
  return (
    <div className="price_form">
      <p className="h6">Ориентировочная стоимость</p>
      <p className="h4">{props.price}&nbsp;₽</p>
    </div>
  );
}

export default PriceForm;
