import React from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';

import Content from '../assets/db/about.js';

function About() {
  return (
    <>
      <MainScreen content={Content} />
      <PromoList />
    </>
  );
}

export default About;
