import React, { Component } from 'react';
import TextBlock from '../components/HalfSideBlock/TextBlock';
import PromoList from '../components/PromoList';
import BookList from '../components/BookList';
import Layout from '../components/Layout';

import Content from '../assets/db/books.js';
const cw = typeof window !== 'undefined' ? window.innerWidth : null;
class Books extends Component {
  state = {
    mobile: cw < 768 ? true : false,
  };
  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <div class="container">
          <TextBlock side={Content.About} mobile={this.state.mobile} />
        </div>
        <BookList content={Content.Books} />
        <PromoList />
      </Layout>
    );
  }
}

export default Books;
