import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
  flex-wrap: wrap;
  max-width: 1000px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  font-size: 16px;
  
  &:focus {
    border: solid 1px #8c8c8c;
    outline: 1px solid #0071EB;
  }

  @media (max-width: 1000px) {
    height: 50px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #e50914;
  color: white;
  /* text-transform: uppercase; */
  padding: 0 32px;
  font-size: 26px;
  cursor: pointer;
  border: none;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    margin-top: 20px;
    padding: 13px 16px;
    border-radius: 2.5px;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
