import React, { Component } from 'react';

import './styles.scss';

class Contacts extends Component {
  render() {
    const { credits } = this.props.content;
    return (
      <div className="container">
        <div class="row">
          <p class="h1 tc">По всем вопросам:</p>
        </div>
        <div class="half">
          <p className="h3"></p>
          <p className="h3">
            Телефон: <a href={`tel:${credits.phone}`}>{credits.phone}</a>
          </p>
          <p className="h3">
            Email: <a href={`mailto:${credits.email}`}>{credits.email}</a>
          </p>
        </div>
        <div class="half">
          <p className="h3">
            <a href={credits.inst}>
              <i class="icon-instagram"></i> @mashamedvedik
            </a>
          </p>
          <p className="h3">
            <a href={credits.inst}>
              <i class="icon-vkontakte"></i> @mashamedvedik
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contacts;
