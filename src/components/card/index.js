import React, { createContext, useContext, useState } from 'react';
import { useContentMovie } from '../../hooks';

import {
  Entities,
  Container,
  Gradient,
  Group,
  Item,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Content,
  Meta,
  Image,
  Rating,
} from './styles/card';

export const FeatureContext = createContext([]);

const baseUrlImg = 'https://image.tmdb.org/t/p/original';

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

React.memo(Card.Row = function CardRow ({ fetchUrl, handleClick, isLargeRow, truncate }) {
  const movies = useContentMovie(fetchUrl);

  return (
    <Entities isLargeRow={isLargeRow}>
      {movies.map(
        (movie) => ((isLargeRow ? movie.poster_path : movie.backdrop_path)) && (
          <Card.Item key={movie.id} item={movie} handleClick={() => handleClick(movie)}>
            <Image
              src={`${baseUrlImg}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              isLargeRow={isLargeRow}
              alt="bg"
            />
            <Meta>
              <SubTitle>{movie.title}</SubTitle>
              <Text>{truncate(movie.overview, 150)}</Text>
            </Meta>
          </Card.Item>
        )
      )}
    </Entities>
  );
});

Card.Item = function CardItem({ item, handleClick, children, ...props }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
        handleClick();
      }}
      {...props}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...props }) {
  return <Image {...props} />;
};

Card.Feature = function CardFeature({ children, truncate, ...props }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <Feature {...props} src={`${baseUrlImg}${itemFeature.poster_path}`}>
      <Content>
        <FeatureTitle>{itemFeature?.title || itemFeature?.name }</FeatureTitle>
        <FeatureText>{truncate(itemFeature?.overview, 150)}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Rating rating={itemFeature.vote_average}>{itemFeature.vote_average}</Rating>
          <FeatureText fontWeight="bold">
            {(itemFeature?.release_date && `Release date - ${itemFeature?.release_date}`) || (itemFeature?.first_air_date && `First air date - ${itemFeature?.first_air_date}`)}
          </FeatureText>
        </Group>

        {children}
      </Content>
      <Gradient />
    </Feature>
  ) : null;
};
