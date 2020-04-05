import React, { Component } from 'react';

import './module.PreviewCard.scss';

class PreviewCard extends Component {
  state = {
    atts: false,
  };

  // setContent = (imageSrc, description, name) => {
  //   let content = {
  //     img: imageSrc,
  //     text: description,
  //     name: name
  //   };
  //   this.props.initLightBox(!this.props.lightBox, content);
  // };

  toggleDescription = (e) => {
    this.setState({
      atts: e,
    });
  };

  render() {
    let { name, description, imageSrc } = this.props.content;
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
        onClick={(e) => {
          if (mobile) {
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
