import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 56px;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;
  margin-bottom: 20px;
  transition: all 0.3s;
  :hover {
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 40px;
`;

export const Text = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
