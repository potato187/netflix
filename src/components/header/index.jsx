import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, ButtonLink, Frame, Logo } from "./styles/header";

export default function Header({ bg, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ to, alt, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} alt={alt} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.defaultProps = {
  bg: true,
  to: "/home",
  alt: "Netflix",
};
