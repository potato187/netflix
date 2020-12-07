import { Feature } from "components";
import React from "react";

export default function FeatureContainer({ children }) {
  return (
    <Feature>
      <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
      <Feature.SubTitle>Watch anywhere. Cancel at nay time.</Feature.SubTitle>
      {children}
    </Feature>
  );
}
