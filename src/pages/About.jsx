import React from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import Contacts from '../components/Contacts';
import Layout from '../components/Layout';

import Content from '../assets/db/about.js';
function About() {
  return (
    <Layout>
      <MainScreen content={Content} />
      <Contacts content={Content} />
      <PromoList />
    </Layout>
  );
}

export default About;
