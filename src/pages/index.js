import React, { Component } from 'react';

import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import PreviewList from '../components/PreviewList';
import Layout from '../components/Layout';
import LightBox from '../components/LightBox';

import Content from '../assets/db/mainScreen.js';

const cw =
  typeof window === 'undefined' || !window.document ? 0 : window.innerWidth;
class IndexPage extends Component {
  state = {
    mobile: false,
    isLightBox: false,
    content: '',
  };

  if_mobile = ($cw) => {
    this.setState({ mobile: $cw < 992 ? true : false });
  };

  componentDidMount() {
    this.if_mobile(cw);
  }

  initLightBox = (e, bool) => {
    if (!bool) {
      e = this.state.content;
    }
    this.setState({
      isLightBox: !this.state.isLightBox,
      content: e,
    });
    this.fillLB(e);
  };

  fillLB = (e) => {
    console.log('state', this.state.content);
  };

  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <MainScreen content={Content} />
        {/* <PromoList /> */}
        <PreviewList
          mobile={this.state.mobile}
          initLightBox={this.initLightBox}
        />
        <LightBox
          lightBox={this.state.isLightBox}
          LbContent={this.state.content}
          initLightBox={this.initLightBox}
        />
      </Layout>
    );
  }
}

export default IndexPage;
