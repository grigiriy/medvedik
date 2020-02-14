import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';

import Header from './components/Header';
// import MainScreen from './components/MainScreen';
// import CatalogMenu from './components/CatalogMenu';
// import PromoList from './components/PromoList';
// import ProductList from './components/ProductList';
// import PreviewList from './components/PreviewList';

import './assets/scss/styles.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:sub" component={Shop} />
          <Route path="/product/:slug" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
