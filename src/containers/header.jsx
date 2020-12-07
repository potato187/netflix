import { Header } from "components";
import * as ROUTES from "constants/routes";
import React from "react";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/icons/logo.svg"
          alt="Netflix"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>SIGN IN</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
