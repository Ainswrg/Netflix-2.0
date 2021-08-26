import { useEffect, useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <Header>
      <Header.Frame>
        <Header.Navbar show={show}>
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Navbar>
      </Header.Frame>
      <Header.Gradient />
      {children}
    </Header>
  );
}
