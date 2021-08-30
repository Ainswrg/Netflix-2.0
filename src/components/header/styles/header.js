import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none`}
  }
  /* position: relative;
  height: 900px; */
  /* border-bottom: 8px rgb(69, 69, 69) solid; */
  /* background-size: cover; */
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Navbar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ show }) => show && '#222'};
  transition-timing-function: ease-in;
  transition: all 0.5s;

  @media (max-width: 1000px) {
    height: 70px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
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

  @media (min-width: 1000px) {
    width: 120px;
    height: 45px;
    font-size: 23px;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 1000px) {
    height: 45px;
    width: 167px;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.div`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Link = styled.p`
  color: white;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
