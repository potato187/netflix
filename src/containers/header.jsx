import { Header } from "components";
import * as ROUTES from "constants/routes";
import React, { useEffect, useState } from "react";

export default function HeaderContainer({ children }) {
  const [basic, setBasic] = useState(false);

  const handleResize = () => {
    return window.innerWidth > 768 ? setBasic(false) : setBasic(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Header basic={basic}>
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
