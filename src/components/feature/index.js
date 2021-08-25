import { Container, Title, SubTitle } from './styles/feature';

export default function Feature({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};
