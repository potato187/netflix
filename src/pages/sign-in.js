import { HeaderContainer, FooterContainer, SignInForm } from "containers";
import React, { useEffect, useState } from "react";

function SignIn() {
  return (
    <>
      <HeaderContainer>
        <SignInForm />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default SignIn;
