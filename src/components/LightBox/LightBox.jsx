import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './module.LightBox.scss';

const cw = typeof window !== 'undefined' ? window.innerWidth : null;

class LightBox extends Component {
  state = {
    isMobile: cw < 768 ? true : false,
    isTab: cw < 1024 && cw >= 768 ? true : false,
    showAtts: false,
  };

  toggleAtts = (e) => {
    this.setState({
      showAtts: e,
    });
  };

  clickDetect = (e) => {
    console.log(e);
    if (
      e.classList.contains('lightBoxContent') ||
      e.parentElement.classList.contains('lightBoxContent') ||
      e.parentElement.classList.contains('attributes')
    ) {
      this.toggleAtts(!this.state.showAtts);
      return true;
    } else {
      this.toggleAtts(false);
      this.props.initLightBox('', false);
      return false;
    }
  };

  render() {
    let classList = 'lightBoxBG';

    let d_classList = 'attributes';
    if (this.state.showAtts) {
      d_classList += ' withAtts';
    }

    const LB = (props) => {
      let { imageSrc, description, name } = props.LbContent;
      return (
        <div className="lightBoxWrap">
          <div className="lightBoxContent">
            <img src={imageSrc} alt="" />
            <div className={d_classList}>
              <p>{name}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      );
    };
    if (this.props.lightBox === true) {
      return (
        <ReactCSSTransitionGroup
          transitionName="LightBox"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionLeaveTimeout={2000}
          transitionEnter={false}
          transitionLeave={true}
          className={classList}
          onClick={(e) => this.clickDetect(e.target)}
        >
          <LB d_classList="attributes" LbContent={this.props.LbContent} />
        </ReactCSSTransitionGroup>
      );
    } else {
      return '';
    }
  }
}

export default LightBox;
