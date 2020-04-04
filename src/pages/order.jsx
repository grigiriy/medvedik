import React, { Component } from 'react';
import PromoList from '../components/PromoList';
import Contacts from '../components/Contacts';
import Layout from '../components/Layout';
import MainScreen from '../components/MainScreen';

import Content from '../assets/db/order.js';
import Availible from '../assets/db/availible.js';
const cw = typeof window !== 'undefined' ? window.innerWidth : null;
class Order extends Component {
  state = {
    mobile: cw < 768 ? true : false,
    orderDetails: {
      price: 1900,
      type: 'shirt',
      color: ['white', 'white'],
      size: null,
      image_url: require(`../images/heart_logo.png`)
    }
  };

  updateOrderDetails = ($type, $value) => {
    console.log($type, $value);
    let $price = this.updatePrice($type, $value);
    console.log($price);

    this.setState({
      orderDetails: {
        ...this.state.orderDetails,
        price: $price,
        [$type]: $value
      }
    });
  };

  updatePrice = ($type, $value) => {
    let value;
    if ($type === 'type') {
      if ($value[0] !== 'black') {
        value = Availible[$value].price[0];
      } else {
        value = Availible[$value].price[1];
      }
    } else if ($type === 'color') {
      if ($value[0] !== 'black') {
        value = Availible[this.state.orderDetails.type].price[0];
      } else {
        value = Availible[this.state.orderDetails.type].price[1];
      }
    } else {
      value = this.state.orderDetails.price;
    }
    return value;
    //надо будет сбрасывать на первую имеющуюся в наличии, если текущей расцветки/размера нету
  };

  checkAvailible = ($type, $value) => {
    let cur_val = this.state.orderDetails.$type;
    let new_val = Availible[this.state.orderDetails.type].includes($value)
      ? $value
      : cur_val;

    return 'huy';
  };

  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <MainScreen
          content={Content}
          mobile={this.state.mobile}
          orderDetails={this.state.orderDetails}
          updateOrderDetails={this.updateOrderDetails}
        />
        <Contacts content={Content} />
        <PromoList />
      </Layout>
    );
  }
}

export default Order;
