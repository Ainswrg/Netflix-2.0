import { createContext, useContext, useState } from 'react';
import { useContentMovie } from '../../hooks';

import {
  Entities,
  Container,
  Group,
  Item,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Image,
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...props }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...props}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...props }) {
  return <Group {...props}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...props }) {
  return <Entities {...props}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...props }) {
  return <Meta {...props}>{children}</Meta>;
};

Card.Row = function CardRow({ children, fetchUrl, isLargeRow }) {
  const baseUrlImg = 'https://image.tmdb.org/t/p/original';

  const movies = useContentMovie(fetchUrl);

  return (
    <Card.Entities isLargeRow={isLargeRow}>
      {movies.map((movie) => ((isLargeRow && movie.poster_path)
      || (!isLargeRow && movie.backdrop_path)) && (
        <Card.Item key={movie.id}>
          <Card.Image src={`${baseUrlImg}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} isLargeRow={isLargeRow} />
          <Card.Meta>
            <Card.SubTitle>{movie.title}</Card.SubTitle>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Meta>
        </Card.Item>
      ))}
    </Card.Entities>
  );
};

Card.Item = function CardItem({ item, children, ...props }) {
  // const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      // onClick={() => {
      //   setItemFeature(item);
      //   setShowFeature(true);
      // }}
      {...props}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...props }) {
  return <Image {...props} />;
};
