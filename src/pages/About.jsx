import React from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import Contacts from '../components/Contacts';

import Content from '../assets/db/about.js';

function About() {
  return (
    <>
      <MainScreen content={Content} />
      <Contacts content={Content} />
      <PromoList />
    </>
  );
}

export default About;
