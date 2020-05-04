import React, { Component } from 'react';

import './module.PreviewCard.scss';

import Img from 'gatsby-image';

class PreviewCard extends Component {
  state = {
    atts: false,
  };

  toggleDescription = (e) => {
    this.setState({
      atts: e,
    });
  };

  render() {
    let { name, description } = this.props.content;
    const { mobile } = this.props;

    let detailClassList = 'detail';
    const { atts } = this.state;

    if (atts) {
      detailClassList += ' withAtts';
    }

    // console.log(this.props.image.srcSet.split(','));
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
          this.props.initLightBox(
            {
              name: name,
              description: description,
              imageSrc: this.props.image.src,
            },
            true
          );
        }}
      >
        <Img fluid={this.props.image} alt={name} />
        <div className={detailClassList}>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default PreviewCard;
