import React, { Component } from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import BookList from '../components/BookList';
import Layout from '../components/Layout';

import Content from '../assets/db/books.js';
const cw = window.innerWidth;
class Books extends Component {
  state = {
    mobile: cw < 768 ? true : false
  };
  render() {
    return (
      <Layout mobile={this.state.mobile}>
        <MainScreen
          content={Content.About}
          mobile={true}
          classNames="booksPage"
        />
        <BookList content={Content.Books} />
        <PromoList />
      </Layout>
    );
  }
}

export default Books;