import React, { Component } from 'react';

import './styles.scss';
class BookCard extends Component {
  render() {
    const { text, headLine, imageSrc, linkTo } = this.props.content;

    return (
      <div className="book_card">
        <div className="card_image">
          <img src={require('../../images/' + imageSrc)} alt="" />
        </div>
        <div className="card_details">
          <p className="h3">{headLine}</p>
          <p>{text}</p>
          <a href={linkTo}>Перейти в магазин</a>
        </div>
      </div>
    );
  }
}

export default BookCard;
