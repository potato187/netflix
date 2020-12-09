import { HeaderContainer, FooterContainer, SignInForm } from "containers";
import React, { useEffect, useState } from "react";

function SignIn() {
  const [basic, setBasic] = useState(false);
  console.log(basic);
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
    <>
      <HeaderContainer basic={basic}>
        <SignInForm />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default SignIn;
