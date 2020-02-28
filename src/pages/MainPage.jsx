import React, { Component } from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import PreviewList from '../components/PreviewList';
import LightBox from '../components/LightBox';

import Content from '../assets/db/mainScreen.js';

class MainPage extends Component {
  state = {
    lightBox: {
      isOpen: false,
      content: {}
    }
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
      <>
        <MainScreen content={Content} />
        <PromoList />
        <PreviewList
          LbContent={this.state.lightBox.content}
          lightBox={this.state.lightBox.isOpen}
          initLightBox={this.initLightBox}
        />
        <LightBox
          LbContent={this.state.lightBox.content}
          lightBox={this.state.lightBox.isOpen}
          initLightBox={this.initLightBox}
        />
      </>
    );
  }
}

export default MainPage;
