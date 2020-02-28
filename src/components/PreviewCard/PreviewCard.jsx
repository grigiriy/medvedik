import React, { Component } from 'react';

import './styles.scss';

class PreviewCard extends Component {
  state = {
    atts: false,
    lb: {
      content: {}
    }
  };

  toggleDescription = async e => {
    this.setState({
      atts: e
    });
  };

  setContent = async (imageSrc, description, name) => {
    this.setState({
      lb: {
        content: {
          img: imageSrc,
          text: description,
          name: name
        }
      }
    });
    setTimeout(() => {
      this.props.initLightBox(!this.props.lightBox, this.state.lb.content);
    }, 0);
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
        onClick={() => {
          this.setContent(imageSrc, description, name);
        }}
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
