import React, { Component } from 'react';
import PromoList from '../components/PromoList';
import Contacts from '../components/Contacts';
import Layout from '../components/Layout';
import MainScreen from '../components/MainScreen';

import Content from '../assets/db/order.js';
import Available from '../assets/db/available.js';
const cw = typeof window !== 'undefined' ? window.innerWidth : null;
class Order extends Component {
  state = {
    mobile: cw < 768 ? true : false,
    orderDetails: {
      price: 1900,
      type: 'shirt',
      color: ['white', 'white'],
      size: null,
      image_url: require(`../images/heart_logo.png`),
    },
  };

  updateOrderDetails = ($type, $value) => {
    if ($type === 'type') {
      this.checkAvailableByType($value);
    } else {
      this.setNewOrderDetails($type, $value);
    }
  };

  setNewOrderDetails = ($type, $value) => {
    let $price = this.updatePrice($type, $value);
    this.setState({
      orderDetails: {
        ...this.state.orderDetails,
        price: $price,
        [$type]: $value,
      },
    });
  };

  updatePrice = ($type, $value) => {
    let value;
    if ($type === 'type') {
      if ($value[0] !== 'black') {
        value = Available[$value].price[0];
      } else {
        value = Available[$value].price[1];
      }
    } else if ($type === 'color') {
      if ($value[0] !== 'black') {
        value = Available[this.state.orderDetails.type].price[0];
      } else {
        value = Available[this.state.orderDetails.type].price[1];
      }
    } else {
      value = this.state.orderDetails.price;
    }
    return value;
  };

  checkAvailableByType = ($value) => {
    this.setNewOrderDetails('type', $value);

    let cur_stock = Available[$value];
    console.log(Available);
    //color
    if (
      cur_stock.colors
        .toString()
        .includes(this.state.orderDetails.color.toString())
    ) {
      console.log('color available');
    } else {
      this.setNewOrderDetails('color', cur_stock.colors[0]);
    }
    console.log(cur_stock.colors[0]);

    //size
    if (cur_stock.sizes.includes(this.state.orderDetails.size)) {
      console.log(cur_stock.sizes[0]);
    } else {
      this.setNewOrderDetails('size', cur_stock.sizes[0]);
    }
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
