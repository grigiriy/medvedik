import React, { Component } from 'react';

import './styles.scss';

class PreviewCard extends Component {
  state = {
    atts: false
  };

  toggleDescription = e => {
    this.setState({
      atts: e
    });
  };

  render() {
    const { name, description, imageSrc } = this.props.content;
    const { atts } = this.state;

    let classList = 'detail';
    if (atts) {
      classList += ' withAtts';
    }

    return (
      <div
        className="preview"
        onMouseEnter={() => this.toggleDescription(true)}
        onMouseLeave={() => this.toggleDescription(false)}
        onM
      >
        <img src={require('../../assets/images/' + imageSrc)} alt="" />
        <div className={classList}>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default PreviewCard;
