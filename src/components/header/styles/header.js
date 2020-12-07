import { Link as ReactRouterLink } from "react-router-dom";
import styled from "styled-components/macro";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
      top left/cover no-repeat;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 56px;
  padding: 18px 0;

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  width: 108px;
  height: 32px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    width: 167px;
    height: 45px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  text-align: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.red};
  width: 84px;
  height: fit-content;
  color: #fff;
  font-size: 15px;
  border-radius: 3px;
  padding: 8x 17px;
  cursor: pointer;
`;
