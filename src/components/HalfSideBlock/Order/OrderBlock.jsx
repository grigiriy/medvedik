import React, { Component } from 'react';
// import { Link } from 'gatsby';

import OrderForm from '../Elements/OrderForm';
import UploadForm from '../Elements/UploadForm';
import SelectAttForm from '../Elements/SelectAttForm';
import PriceForm from '../Elements/PriceForm';

import Content from '../../../assets/db/available.js';

class OrderBlock extends Component {
  render() {
    const { text } = this.props.side;
    let { type, price, image_url, textName } = this.props.orderDetails;

    let sizes = Content[type]['sizes'];
    let colors = Content[type]['colors'];

    const { mobile } = this.props;

    let classList = mobile
      ? 'halfScreenBlock textOnly mobileView'
      : 'halfScreenBlock textOnly';
    return (
      <div className={classList}>
        <p className="attributes">
          <SelectAttForm
            type={'size'}
            atts={sizes}
            updateOrderDetails={this.props.updateOrderDetails}
          />
          <SelectAttForm
            type={'color'}
            atts={colors}
            updateOrderDetails={this.props.updateOrderDetails}
          />
        </p>

        <UploadForm
          text={text}
          type={textName}
          updateOrderDetails={this.props.updateOrderDetails}
          image_url={image_url}
        />

        <PriceForm price={price} />

        <OrderForm />

        <div className="order_directions">
          <img src={require('../../../images/ava.jpg')} alt="" />
          <p>После оформления заказа я с вами свяжусь для уточнения деталей.</p>
        </div>
      </div>
    );
  }
}
export default OrderBlock;
