import React, { Component } from 'react';

import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import PreviewList from '../components/PreviewList';
import Layout from '../components/Layout';
import LightBox from '../components/LightBox';

import Content from '../assets/db/mainScreen.js';

const cw = typeof window !== 'undefined' ? window.innerWidth : null;
class IndexPage extends Component {
  state = {
    mobile: cw < 768 ? true : false,
    isLightBox: false,
    content: '',
  };

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
    // console.log(e);
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
