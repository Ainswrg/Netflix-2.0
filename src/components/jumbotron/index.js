import React from 'react';
import { Container, Inner, Item, Title, SubTitle, Pane, Image, Video, Flex } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...props }) {
  return (
    <Item {...props}>
      <Inner direction={direction}> {children} </Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...props }) {
  return <Pane {...props}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
  return <Title {...props}> {children} </Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
  return <SubTitle {...props}> {children} </SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...props }) {
  return <Image {...props} />;
};

Jumbotron.Video = function JumbotronVideo({ ...props }) {
  return <Video autoPlay loop muted playsInline {...props} />;
};

Jumbotron.Flex = function JumbotronFlex({ children, ...props }) {
  return <Flex {...props}> { children } </Flex>;
};
