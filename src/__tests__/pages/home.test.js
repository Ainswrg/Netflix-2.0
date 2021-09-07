/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../../pages';

describe('<Home />', () => {
  it('renders the <Homepage /> with populated data', () => {
    const { getAllByText, getByText, getAllByPlaceholderText } = render(
      <Router>
        <Home />
      </Router>
    );

    expect(getByText('Unlimited Films, TV programmes and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(getAllByPlaceholderText('Email address')).toBeTruthy();
    expect(getAllByText('Ready to watch? Enter your email to create or restart your membership.')).toBeTruthy();
    expect(getAllByText('Try it now')).toBeTruthy();
  });
});
