import React from 'react';
import { Flex } from '../components/jumbotron/styles/jumbotron';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Flex>
              <Jumbotron.Image src={item.image} alt={item.alt} />
              <Jumbotron.Video src={item.video} type="video/mp4" top={item.top} height={item.height} left={item.left} />
            </Flex>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
