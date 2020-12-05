import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  display: inline-block;
  min-width: 450px;
  width: 100%;
  padding: 10px;
  height: 70px;

  ::placeholder {
    font-family: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  flex: 1 0 auto;
  height: 70px;
  background-color: #e50914;
  color: #fff;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f40612;
  }
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 1.3;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
