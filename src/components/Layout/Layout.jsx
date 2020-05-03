import React, { Component } from 'react';

import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import '../../assets/scss/styles.scss';

class Layout extends Component {
  render() {
    let { children } = this.props;
    return (
      <>
        <Helmet
          // defer={true}
          title="Maria Medvedik. Embroidery Artis"
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${require('../../images/fav.png')}`,
            },
          ]}
          meta={[
            {
              name: 'description',
              content: 'Маша Медведик - художница из москвы.',
            },
            {
              name: 'keywords',
              content: 'Embroidery Artis',
            },
            {
              property: 'og:title',
              content: 'Maria Medvedik. Embroidery Artis',
            },
            {
              property: 'og:description',
              content: 'Маша Медведик - художница из москвы.',
            },
            // {
            //   property: 'og:image',
            //   content: `${require('../../images/og.jpg')}`,
            // },
            // {
            //   property: 'og:image:url',
            //   content: `${require('../../images/og.jpg')}`,
            // },
            // {
            //   property: 'og:image:width',
            //   content: 1200,
            // },
            // {
            //   property: 'og:image:height',
            //   content: 630,
            // },
            // {
            //   name: 'yandex-verification',
            //   content: '74a94675657d77b9',
            // },
            // {
            //   name: 'google-site-verification',
            //   content: 'wGEqjkW29uPT70Dj8s9HwfjozrI884NdYdEYvlLKdxc',
            // },
          ]}
        />
        <Header mobile={this.props.mobile} />
        {children}
        <Footer />
      </>
    );
  }
}
export default Layout;
