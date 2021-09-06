/* eslint-disable no-undef */
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../components';
// jest.mock('react-router-dom');

describe('<Header />', () => {
  it('renders the basic <Header /> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Router>
        <Header>
          <Header.Frame>
            <Header.Logo src="/logo.svg" alt="Netflix" />
            <Header.TextLink active="true">Hello I am a link!</Header.TextLink>
          </Header.Frame>
        </Header>
      </Router>
    );

    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(getByTestId('header-bg')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the basic <Header /> without a background', () => {
    const { container, getByText, getByTestId } = render(
      <Router>
        <Header>
          <Header.Frame>
            <Header.Logo src="/logo.svg" alt="Netflix" />
            <Header.ButtonLink>Sign In</Header.ButtonLink>
            <Header.TextLink active="false">Hello I am a link!</Header.TextLink>
          </Header.Frame>
        </Header>
      </Router>
    );

    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(getByTestId('header-bg')).toBeTruthy();
    expect(getByText('Hello I am a link!')).toBeTruthy();
  });

  it('renders the full <Header> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Router>
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo src="/images/logo.svg" alt="Netflix" />
              <Header.TextLink active={false} onClick={() => {}}>
                TV
              </Header.TextLink>
              <Header.TextLink active onClick={() => {}}>
                Films
              </Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.SearchTerm searchTerm="Joker" setSearchTerm={() => {}} />
              <Header.Profile>
                <Header.Picture src="/images/jaslan.png" />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src="/images/jaslan.png" />
                    <Header.TextLink>Jaslan D</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => {}}>Sign out</Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>

          <Header.Feature>
            <Header.FeatureCallOut>Watch Now</Header.FeatureCallOut>
            <Header.Text>Forever alone in a crowd...</Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
      </Router>
    );

    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('search-input').value).toBe('Joker');
    fireEvent.change(getByTestId('search-input'), { target: { value: 'Simpsons' } });
    fireEvent.click(getByTestId('search-click'));

    expect(getByText('TV')).toBeTruthy();
    expect(getByText('Films')).toBeTruthy();
    expect(getByText('Jaslan D')).toBeTruthy();
    expect(getByText('Watch Now')).toBeTruthy();
    expect(getByText('Sign out')).toBeTruthy();
    // expect(getByText('Forever alone in a crowd...')).toBeTruthy();
    expect(getByText('Play')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
