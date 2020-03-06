import React, { Component } from 'react';

class OrderForm extends Component {
  render() {
    return (
      <div className="container" id="order">
        <div class="row">
          <p class="h1 tc">Заказать:</p>
        </div>
        <form action="">
          <label htmlFor="costumer_name"></label>
          <input type="text" id="costumer_name" />
          <label htmlFor="costumer_mail"></label>
          <input type="email" id="costumer_mail" />
          <label htmlFor="costumer_phone"></label>
          <input type="phone" id="costumer_phone" />
          <input type="submit" value="Здарова ебать" />
        </form>
      </div>
    );
  }
}
export default OrderForm;
