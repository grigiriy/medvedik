import React, { Component } from 'react';

import './module.LightBox.scss';

class LightBox extends Component {
  clickDetect = (e, bool) => {
    if (
      e.classList.contains('lightBoxContent') ||
      e.parentElement.classList.contains('lightBoxContent') ||
      e.parentElement.classList.contains('attributes')
    ) {
      return !bool;
    } else {
      return bool;
    }
  };

  render() {
    let isOpen = this.props.lightBox;
    let { img, text, name } = this.props.LbContent;
    let classList = 'lightBoxBG';
    if (isOpen) {
      classList += ' shown';
    }

    if (isOpen) {
      return (
        <div
          className={classList}
          onClick={(e) =>
            this.props.initLightBox(
              this.clickDetect(e.target),
              this.props.LbContent
            )
          }
        >
          <div className="lightBoxWrap">
            <div className="lightBoxContent">
              <img src={require('../../images/' + img)} alt="" />
              <div class="attributes">
                <p>{name}</p>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default LightBox;
