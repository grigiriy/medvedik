import React, { Component } from 'react';
import TextBlock from '../components/HalfSideBlock/TextBlock';
import BookList from '../components/BookList';
import Layout from '../components/Layout';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Content from '../assets/db/books.js';
const cw =
  typeof window === 'undefined' || !window.document ? 0 : window.innerWidth;
class Books extends Component {
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
        <ReactCSSTransitionGroup
          transitionName="mainScreen"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}
          component="section"
        >
          <div class="container">
            <TextBlock side={Content.About} mobile={this.state.mobile} />
            <BookList content={Content.Books} />
          </div>
        </ReactCSSTransitionGroup>
      </Layout>
    );
  }
}

export default Books;
