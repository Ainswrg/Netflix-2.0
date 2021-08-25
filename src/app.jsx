import React from 'react';
import { FaqsContainer } from './containers/Faqs';
import { FooterContainer } from './containers/Footer';
import { JumbotronContainer } from './containers/Jumbotron';

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />;
    </>
  );
}
