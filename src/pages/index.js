import React, { Component } from 'react';

import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import PreviewList from '../components/PreviewList';
import LightBox from '../components/LightBox';
import Layout from '../components/Layout';

import Content from '../assets/db/mainScreen.js';

const cw = window.innerWidth;
class IndexPage extends Component {
  state = {
    lightBox: {
      isOpen: false,
      content: {}
    },
    mobile: cw < 1024 ? true : false
  };

  initLightBox = (e, content) => {
    this.setState({
      lightBox: {
        isOpen: e,
        content: content
      }
    });
  };

  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <MainScreen content={Content} />
        <PromoList />
        <PreviewList
          LbContent={this.state.lightBox.content}
          lightBox={this.state.lightBox.isOpen}
          initLightBox={this.initLightBox}
          mobile={this.state.mobile}
        />
        <LightBox
          LbContent={this.state.lightBox.content}
          lightBox={this.state.lightBox.isOpen}
          initLightBox={this.initLightBox}
        />
      </Layout>
    );
  }
}

export default IndexPage;
