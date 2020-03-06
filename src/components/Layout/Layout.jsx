import React, { Component } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import '../../assets/scss/styles.scss';

const cw = window.innerWidth;

class Layout extends Component {
  state = {
    mobile: cw < 1024 ? true : false
  };
  render() {
    let { children } = this.props;
    return (
      <>
        <Header mobile={this.state.mobile} />
        {children}
        <Footer />
      </>
    );
  }
}
export default Layout;
