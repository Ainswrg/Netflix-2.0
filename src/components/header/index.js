import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Background,
  ButtonLink,
  Container,
  Dropdown,
  Feature,
  FeatureCallOut,
  Gradient,
  Group,
  Link,
  Logo,
  Navbar,
  Picture,
  Profile,
  Text,
} from './styles/header';

export default function Header({ bg = true, children, ...props }) {
  return bg ? <Background {...props}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...props }) {
  return <Group {...props}>{children}</Group>;
};

Header.Dropdown = function HeaderDropdown({ children, ...props }) {
  return <Dropdown {...props}>{children}</Dropdown>;
};

Header.Feature = function HeaderFeature({ children, ...props }) {
  return <Feature {...props}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...props }) {
  return <FeatureCallOut {...props}>{children}</FeatureCallOut>;
};

Header.Profile = function HeaderProfile({ children, ...props }) {
  return <Profile {...props}>{children}</Profile>;
};

Header.Text = function HeaderText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Header.Picture = function HeaderPicture({ src, ...props }) {
  return <Picture {...props} src={`images/users/${src}.png`} />;
};

Header.TextLink = function HeaderTextLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
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

Header.Navbar = function HeaderNavbar({ children, ...props }) {
  return <Navbar {...props}> {children} </Navbar>;
};

Header.Gradient = function HeaderGradient({ ...props }) {
  return <Gradient {...props} />;
};
