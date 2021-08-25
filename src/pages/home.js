import React from 'react';
import { OptForm } from '../components';
import { FaqsContainer } from '../containers/Faqs';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Headers';
import { JumbotronContainer } from '../containers/Jumbotron';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
        </OptForm>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
