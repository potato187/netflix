import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid ${({ theme }) => theme.colors.borderColor};
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
  padding: 70px 45px;
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 10px;
  max-width: 700px;
  &:first-of-type {
    margin-top: 3rem;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin: 0 0 8px 0;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  background-color: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  max-height: 0px;
  visibility: hidden;
  opacity: 0;
  padding: 0 2.2em 0 1.2em;
  transition: all 0.5s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background-color: #303030;

  white-space: pre-wrap;
  user-select: none;

  ${({ toggle }) =>
    toggle &&
    css`
      max-height: 1200px;
      visibility: visible;
      opacity: 1;
      padding: 0.8em 2.2em 0.8em 1.2em;
    `}

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Toggle = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: transparent;
  position: relative;
  transform: ${({ toggle }) => (toggle ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.5s;
  ::after,
  ::before {
    content: "";
    position: absolute;
    background-color: #fff;
    border-radius: 3px;
    width: 100%;
    height: 5px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  ::before {
    transform: translateY(-50%) rotate(-90deg);
  }
`;
