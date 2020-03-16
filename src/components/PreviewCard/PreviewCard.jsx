import React, { Component } from 'react';

import './styles.scss';

class PreviewCard extends Component {
  state = {
    atts: false
  };

  setContent = (imageSrc, description, name) => {
    let content = {
      img: imageSrc,
      text: description,
      name: name
    };
    this.props.initLightBox(!this.props.lightBox, content);
  };

  toggleDescription = async e => {
    this.setState({
      atts: e
    });
    //todo: reset state of siblings
  };

  render() {
    const { name, description, imageSrc } = this.props.content;
    const { mobile } = this.props.mobile;

    let detailClassList = 'detail';
    const { atts } = this.state;

    if (atts) {
      detailClassList += ' withAtts';
    }
    return (
      <div
        className="preview"
        onMouseEnter={() => {
          if (!mobile) {
            this.toggleDescription(true);
          }
        }}
        onMouseLeave={() => {
          if (!mobile) {
            this.toggleDescription(false);
          }
        }}
        onClick={() => {
          if (mobile) {
            this.setContent(imageSrc, description, name);
          } else {
            this.toggleDescription(!this.state.atts);
          }
        }}
      >
        <img src={require('../../images/' + imageSrc)} alt="" />
        <div className={detailClassList}>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default PreviewCard;
