import React, { Component } from 'react';
// import { Link } from 'gatsby';

import OrderForm from '../Elements/OrderForm';
import UploadForm from '../Elements/UploadForm';
import SelectAttForm from '../Elements/SelectAttForm';
import PriceForm from '../Elements/PriceForm';

import Content from '../../../assets/db/availible.js';

class OrderBlock extends Component {
  state = {
    type: this.props.type,
    color: this.props.color,
    size: this.props.size,
    price: 1200
  };

  updatePrice = () => {
    console.log(this.state.color);
    // let colorMult = this.state.color;

    // colorMult = colorMult !== '#333' ? 0 : 300;

    // this.setState({
    //   price: $value
    // });
  };

  // componentDidMount() {
  //   this.updatePrice();
  // }

  render() {
    const { text } = this.props.side;
    let type = this.props.type;

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
            selectAtt={this.props.selectAtt}
          />
          <SelectAttForm
            type={'color'}
            atts={colors}
            updatePrice={this.updatePrice}
            selectAtt={this.props.selectAtt}
          />
        </p>

        <UploadForm text={text} type={type} />

        <PriceForm price={this.state.price} />

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
