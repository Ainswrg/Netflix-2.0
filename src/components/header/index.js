import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, ButtonLink, Container, Logo } from './styles/header';

export default function Header({ bg = true, children, ...props }) {
  return bg ? <Background {...props}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <ReactRouterLink to={to} {...props}>
      <Logo {...props} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...props }) {
  return <ButtonLink {...props}>{children}</ButtonLink>;
};
