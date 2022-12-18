import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import TextBlock from '../components/HalfSideBlock/TextBlock';
import BookList from '../components/BookList';
import Layout from '../components/Layout';

import Content from '../assets/db/books.js';
const cw =
  typeof window === 'undefined' || !window.document ? 0 : window.innerWidth;
class Books extends React.Component {
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
        <section
          // transitionName="mainScreen"
          // transitionAppear={true}
          // transitionAppearTimeout={2000}
          // transitionEnter={false}
          // transitionLeave={false}
        >
          <div className="container">
            <TextBlock side={Content.About} mobile={this.state.mobile} />
            <BookList content={Content.Books} />
          </div>
        </section>
      </Layout>
    );
  }
}

export default Books;
