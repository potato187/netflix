import { Link as ReactRouterLink } from "react-router-dom";
import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  margin-bottom: 100px;
  border-radius: 5px;

  @media (max-width: 768px) {
    max-width: 100vw;
    min-height: initial;
    margin-bottom: 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px 68px 40px;
  @media (max-width: 768px) {
    padding: 0 20px;
    justify-content: center;
    background-color: #000;
  }
`;

export const Error = styled.div`
  padding: 10px;
  background-color: #e87c03;
  border-radius: 4px;
  margin: 0 0 16px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  color: #8c8c8c;
  font-size: 13px;
  margin-top: 10px;
  line-height: normal;
`;

export const Link = styled(ReactRouterLink)`
  color: ${({ color }) => color || "#fff"};
  font-size: ${({ fz }) => fz || "13px"};
  margin: ${({ margin }) => margin || "0"};
  transition: text-decoration 0.3s;
  &:hover {
    text-decoration: ${({ under }) => (under ? "underline" : "none")};
  }
`;

export const Group = styled.div`
  background-color: #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 16px;
  z-index: 0;
  transform: translateY(-50%);
  color: #8c8c8c;
  user-select: none;
  transition: all 0.3s;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  background-color: transparent;
  color: white;
  line-height: 30px;
  padding: 5px 55px 5px 20px;
  position: relative;
  z-index: 2;

  /*   ${({ warning }) =>
    warning &&
    css`
      border-bottom: 3px solid #e87c03;
    `}
 */

  ${({ focus }) =>
    focus &&
    css`
      & + ${Label} {
        font-size: 12px;
        transform: translateY(-20px);
      }
    `}
`;

export const Submit = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.red};
  padding: 10px 0px;
  font-size: 20px;
  border-radius: 3px;
  font-weight: bold;
  font-style: normal;
  color: #fff;
  margin-bottom: 10px;
`;

export const Show = styled.button`
  visibility: hidden;
  font-size: 16px;
  opacity: 0;
  display: inline-block;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 3;
  background-color: transparent;
  color: #8c8c8c;
  transition: all 0.3;
  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const TextWarning = styled.div`
  display: block;
  font-size: 13px;
  visibility: ${({ warning }) => (warning ? "visible" : "hidden")};
  opacity: ${({ warning }) => (warning ? "1" : "0")};
  color: #e87c03;
  margin-top: 10px;
  transition: all 0.3s;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const CheckBox = styled.input`
  display: none;

  &:checked + label {
    transition: all 0.3s;
    ::before {
      background-color: #737373;
    }
    ::after {
      display: inline-block;
    }
  }
`;

export const GroupHelp = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: center;
  margin: 10px 0px;
  margin: ${({ margin }) => margin || "0 auto"};
`;

export const LabelRemember = styled.label`
  color: #838383;
  font-size: 13px;
  position: relative;
  padding: 0 0 0 20px;
  cursor: pointer;
  user-select: none;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);
    border-radius: 3px;
    background-color: #fff;
  }

  ::after {
    display: none;
    content: "";
    position: absolute;
    top: 0px;
    left: 4px;
    width: 8px;
    height: 12px;
    border-bottom: 3px solid #000;
    border-right: 3px solid #000;
    transform: rotate(45deg);
  }
`;

export const Icon = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 10px;
`;
