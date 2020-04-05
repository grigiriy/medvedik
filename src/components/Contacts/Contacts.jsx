import React, { Component } from 'react';

import './module.Contacts.scss';

class Contacts extends Component {
  render() {
    const { credits } = this.props.content;
    return (
      <div className="container">
        <div className="row">
          <p className="h1 tc">По всем вопросам:</p>
        </div>
        <div className="half">
          <p className="h3"></p>
          <p className="h3">
            Телефон: <a href={`tel:${credits.phone}`}>{credits.phone}</a>
          </p>
          <p className="h3">
            Email: <a href={`mailto:${credits.email}`}>{credits.email}</a>
          </p>
        </div>
        <div className="half">
          <p className="h3">
            <a href={`https://instagram/${credits.inst}`}>
              <i className="icon-instagram"></i> @{credits.inst}
            </a>
          </p>
          <p className="h3">
            <a href={`https://instagram/${credits.vk}`}>
              <i className="icon-vkontakte"></i> @{credits.vk}
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contacts;
