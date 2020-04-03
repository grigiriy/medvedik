import React, { Component } from 'react';

import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

class ConstructorBlock extends Component {
  render() {
    const types = ['shirt', 'sweetshirt', 'hoodie'];
    const { mobile } = this.props;
    let classList = mobile
      ? 'halfScreenBlock mobileView constructor_form'
      : 'constructor_form halfScreenBlock';

    return (
      <div className={classList}>
        <div
          className="main_image"
          style={{
            backgroundImage: `url(${require(`../../../images/${this.props.orderDetails.type}_${this.props.orderDetails.color[0]}.png`)})`
          }}
        >
          <img
            src={require(`../../../images/shirt_${this.props.orderDetails.color[0]}.png`)}
            alt=""
          />

          <Draggable
            handle=".draggable"
            defaultPosition={{ x: 350, y: -400 }}
            // position={null}
            // grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
            bounds="parent"
            cancel=".react-resizable-handle"
          >
            <div
              className="draggable"
              style={{
                backgroundImage: `url(${this.props.orderDetails.image_url})`
              }}
            >
              <ResizableBox
                width={100}
                height={100}
                minConstraints={[70, 70]}
                maxConstraints={[150, 150]}
              ></ResizableBox>
            </div>
          </Draggable>
        </div>
        <div className="constructor_types">
          {types.map(item => (
            <div key={item} className="card">
              <img
                src={require(`../../../images/${item}_${this.props.orderDetails.color[0]}.png`)}
                alt={item}
                onClick={e => {
                  this.props.updateOrderDetails('type', item);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ConstructorBlock;
