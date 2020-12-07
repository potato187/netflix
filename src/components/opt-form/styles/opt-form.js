import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;
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
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  min-height: 70px;
  background-color: #e50914;
  padding: 0 27px;
  color: #fff;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  font-size: 26px;
  span {
    display: inline-block;
    margin-left: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    padding: 5px;
    transform: rotate(-45deg);
  }

  transition: background-color 0.3s;
  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    margin-top: 20px;
    font-size: 18px;
    min-height: 50px;
    span {
      margin-left: 5px;
      padding: 3px;
    }
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
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
