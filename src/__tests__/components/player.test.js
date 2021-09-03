/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Player } from '../../components';

describe('<Player />', () => {
  it('render the <Player /> with video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button />
        <Player.Video />
      </Player>
    );

    expect(queryByTestId('player')).toBeFalsy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeTruthy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
