import React, { Component } from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import Contacts from '../components/Contacts';
import Layout from '../components/Layout';

import Content from '../assets/db/about.js';

const cw =
  typeof window === 'undefined' || !window.document ? 0 : window.innerWidth;
class About extends Component {
  state = {
    mobile: false,
  };

  if_mobile = ($cw) => {
    this.setState({ mobile: $cw < 992 ? true : false });
  };

  componentDidMount() {
    this.if_mobile(cw);
  }

  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <MainScreen content={Content} mobile={this.state.mobile} />
        <Contacts content={Content} />
        <PromoList />
      </Layout>
    );
  }
}

export default About;
