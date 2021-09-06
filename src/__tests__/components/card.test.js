/* eslint-disable no-return-await */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';

const API_KEY = '38ffc00a44d0dc17b34ba82e0252cbab';
const category = 'Films';
const slideRows = [
  { title: 'Trending now', fetchUrl: `/trending/movie/week?api_key=${API_KEY}&language=en-US`, isLargeRow: true },
  { title: 'Action Movies', fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28` },
];

const truncate = (string, n) => (string?.length > n ? `${string.substr(0, n - 1)}...` : string);

describe('<Card />', () => {
  it('renders the <Card /> ', () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((categories) => (
          <Card key={`${category}-${categories.title.toLowerCase()}`} fetchUrl={categories.fetchUrl}>
            <Card.Title>{categories.title}</Card.Title>
            <Card.Row
              fetchUrl={categories.fetchUrl}
              isLargeRow={categories.isLargeRow}
              truncate={truncate}
              // handleClick={handleClick}
            />
            <Card.Feature truncate={truncate}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(getByText('Trending now')).toBeTruthy();
    expect(getByText('Action Movies')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
