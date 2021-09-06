/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature />', () => {
  it('renders the <Feature /> with populated data', () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited Films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
      </Feature>
    );

    expect(getByText('Unlimited Films, TV programmes and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature /> with just title', () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited Films, TV programmes and more.</Feature.Title>
      </Feature>
    );

    expect(getByText('Unlimited Films, TV programmes and more.')).toBeTruthy();
    expect(queryByText('Watch anywhere. Cancel anytime.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature /> with just subtitle', () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
      </Feature>
    );

    expect(queryByText('Unlimited Films, TV programmes and more.')).toBeFalsy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
