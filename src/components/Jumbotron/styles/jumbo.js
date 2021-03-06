import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 70px 45px;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: calc(50% - 15px);
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
