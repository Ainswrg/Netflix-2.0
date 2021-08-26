import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  position: relative;
  height: 900px;
  border-bottom: 8px rgb(69, 69, 69) solid;
  background-size: cover;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
`;
export const Navbar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ show }) => show && '#222'};
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Frame = styled.div``;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  margin-right: 20px;

  &:hover {
    background-color: #f40612;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-left: 20px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
`;
