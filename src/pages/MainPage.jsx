import React from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import PreviewList from '../components/PreviewList';

import Content from '../assets/db/mainScreen.js';

function MainPage() {
  return (
    <>
      <MainScreen content={Content} />
      <PromoList />
      <PreviewList />
    </>
  );
}

export default MainPage;
