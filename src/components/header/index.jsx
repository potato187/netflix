import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, ButtonLink, Frame, Logo } from "./styles/header";

export default function Header({ bg, children, ...resProps }) {
  return bg ? <Background {...resProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...resProps }) {
  return <Frame {...resProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ to, alt, ...resProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...resProps} alt={alt} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...resProps }) {
  return (
    <ButtonLink to={to} {...resProps}>
      {children}
    </ButtonLink>
  );
};

Header.defaultProps = {
  bg: true,
  to: "/home",
  alt: "Netflix",
};
