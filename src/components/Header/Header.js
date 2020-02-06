import React, { Component } from 'react';

import './styles.scss';

class MainScreen extends Component {
  render() {
    return (
      <header>
        <ul className="topMenu">
          {/* {this.state.items.map((item, index) => (
            <Item
              menu={this.state.menu}
              item={item}
              key={this.state.menu + index}
            />
          ))} */}
          <li>Футболки</li>
          <li>Толстовки</li>
          <li>Картины</li>
          <li>Книги</li>
          <hr />
          <li>Обо мне</li>
          <li>Контакты</li>
        </ul>
        <h1 className="headerBack">Masha Medvedik</h1>
      </header>
    );
  }
}

export default MainScreen;
