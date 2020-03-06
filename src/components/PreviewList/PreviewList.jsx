import React, { Component } from 'react';

import PreviewCard from '../PreviewCard';

import Content from '../../assets/db/productList.js';

class PreviewList extends Component {
  render() {
    return (
      <div className="container columns">
        {Object.keys(Content).map((item, index) => (
          <PreviewCard
            content={Content[item]}
            key={Content[item].id}
            lightBox={this.props.lightBox}
            initLightBox={this.props.initLightBox}
            LbContent={this.props.LbContent}
            mobile={this.props.mobile}
          />
        ))}
      </div>
    );
  }
}

export default PreviewList;
