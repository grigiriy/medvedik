import React, { Component } from 'react';

import './styles.scss';

class LightBox extends Component {
  clickDetect = (e, bool) => {
    if (
      e.classList.contains('lightBoxWrap') ||
      e.parentElement.classList.contains('lightBoxWrap')
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
          onClick={e =>
            this.props.initLightBox(
              this.clickDetect(e.target),
              this.props.LbContent
            )
          }
        >
          <div className="lightBoxWrap">
            <img src={require('../../assets/images/' + img)} alt="" />
            <div class="attributes">
              <p>{name}</p>
              <p>{text}</p>
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
