import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  background: #303030;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  padding-left: 20px;
  padding: 0.8em 1.2em;
  user-select: none;

  &::before,
  &::after {
    content: '';
    transition: all 0.3s ease;
    position: absolute;
    background: white;
    right: 20px;
    width: 24px;
    height: 2px;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  &::before {
    top: ${(props) => (props.clicked ? '1.5' : '2.3rem')};
    transform: ${(props) => (props.clicked ? 'rotate(90deg)' : 'rotate(180deg)')};
  }

  &::after {
    top: ${(props) => (props.clicked ? '1.2' : '2.3rem')};
    transform: ${(props) => (props.clicked ? 'rotate(0deg)' : 'rotate(90deg)')};
  }
`;

export const Body = styled.div`
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  max-width: 670px;

  &:first-of-type {
    margin-top: 3em;
  }
`;
