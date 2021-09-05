import styled from 'styled-components/macro';

export const Item = styled.div`
  display: flex;
  border-top: 8px rgb(69, 69, 69) solid;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;

  img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
`;

export const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  margin: 15px 0 5px;
`;

export const Flex = styled.div`
  position: relative;
  display: inline-grid;
  text-align: left;
  align-items: center;
`;

export const Video = styled.video`
  position: relative;
  width: 100%;
  grid-column: 2/2;
  grid-row: 1/2;
  margin: 0 auto;
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const Image = styled.img`
  grid-column: 2/2;
  grid-row: 1/2;
  z-index: 1;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
