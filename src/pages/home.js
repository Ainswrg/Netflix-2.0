import React from 'react';
import { OptForm, Feature } from '../components';
import { FaqsContainer } from '../containers/Faqs';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Headers';
import { JumbotronContainer } from '../containers/Jumbotron';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited Films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
