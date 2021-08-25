/* eslint-disable no-shadow */
import React, { createContext, useContext, useState } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...props }) {
  return (
    <Container {...props}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...props }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...props}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...props }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header clicked={toggleShow} onClick={() => setToggleShow(!toggleShow)} {...props}>
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...props }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...props}>{children}</Body> : null;
};
