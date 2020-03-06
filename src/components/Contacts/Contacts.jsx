import React, { Component } from 'react';
import { Link } from 'gatsby';

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
            Телефон: <Link to={`tel:${credits.phone}`}>{credits.phone}</Link>
          </p>
          <p className="h3">
            Email: <Link to={`mailto:${credits.email}`}>{credits.email}</Link>
          </p>
        </div>
        <div class="half">
          <p className="h3">
            <Link to={credits.inst}>
              <i class="icon-instagram"></i> @mashamedvedik
            </Link>
          </p>
          <p className="h3">
            <Link to={credits.inst}>
              <i class="icon-vkontakte"></i> @mashamedvedik
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Contacts;
