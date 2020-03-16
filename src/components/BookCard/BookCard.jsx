import React, { Component } from 'react';
import Button from '../../components/Elements/Button';

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
          <a href={linkTo}>
            <Button>Перейти в магазин</Button>
          </a>
        </div>
      </div>
    );
  }
}

export default BookCard;
