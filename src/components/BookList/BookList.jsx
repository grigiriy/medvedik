import React, { Component } from 'react';

import BookCard from '../BookCard';

class BookList extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="mb-5">
        {Object.keys(content).map((item, index) => (
          <BookCard content={content[item]} key={content[item].headLine} />
        ))}
      </div>
    );
  }
}
export default BookList;
