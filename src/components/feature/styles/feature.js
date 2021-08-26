import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  border-bottom: 8px solid #222;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  font-size: 50px;
  max-width: 640px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  max-width: 640px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
