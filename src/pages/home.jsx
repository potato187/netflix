import {
  FaqsContainer,
  FeatureContainer,
  FooterContainer,
  HeaderContainer,
  JumbotronContainer,
  OptFormContainer,
} from "containers";

import React from "react";

function Home() {
  return (
    <>
      <HeaderContainer>
        <FeatureContainer>
          <OptFormContainer />
        </FeatureContainer>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
