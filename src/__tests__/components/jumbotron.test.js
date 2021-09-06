/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { Jumbotron } from '../../components';
import jumboData from '../../fixtures/jumbo.json';

describe('<Jumbotron />', () => {
  it('renders the <Jumbotron /> with populated data', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Flex>
                <Jumbotron.Image src={item.image} alt={item.alt} data-testid={`${item.id}-jumbo-image`} />
                <Jumbotron.Video
                  src={item.video}
                  type="video/mp4"
                  top={item.top}
                  height={item.height}
                  left={item.left}
                />
              </Jumbotron.Flex>
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );

    expect(getByText('Enjoy on your TV.')).toBeTruthy();
    expect(getByAltText('TV')).toBeTruthy();
    expect(getByTestId('1-jumbo-image')).toBeTruthy();
    expect(
      getByText('Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.')
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
