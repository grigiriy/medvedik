import React, { Component } from 'react';

import './styles.scss';

class PreviewCard extends Component {
  setContent = (imageSrc, description, name) => {
    let content = {
      img: imageSrc,
      text: description,
      name: name
    };
    this.props.initLightBox(!this.props.lightBox, content);
  };

  render() {
    const { name, description, imageSrc } = this.props.content;

    return (
      <div
        className="preview"
        onClick={() => {
          this.setContent(imageSrc, description, name);
        }}
      >
        <img src={require('../../assets/images/' + imageSrc)} alt="" />
        <div className="detail">
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default PreviewCard;
