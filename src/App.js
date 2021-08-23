import React from 'react';
import {Jumbotron} from './components/jumbotron';
import { Flex } from "./components/jumbotron/styles/jumbotron";
import jumboData from "./fixtures/jumbo";
// import { Jumbotron } from "./components/jumbotron";

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Flex >
              <Jumbotron.Image src={item.image} alt={item.alt} />
              <Jumbotron.Video src={item.video} type='video/mp4' top={item.top} height={item.height} left={item.left}/>
            </Flex>
          </Jumbotron.Pane>

        </Jumbotron >
      ))}
    </Jumbotron.Container>
  );
}



// import React from 'react';
// import JumbotronContainer from "./containers/Jumbotron"

// export default function App() {
//   return <JumbotronContainer />;
// }