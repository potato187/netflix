import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 640px;
  font-size: 64px;
  font-weight: 700;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  max-width: 640px;
  font-size: 26px;
  font-weight: normal;
  margin: 20px auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
