import React from "react";
import {
  Break,
  Button,
  Container,
  Group,
  Input,
  Text,
} from "./styles/opt-form";

export default function OptForm({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...resProps }) {
  return <Input {...resProps} />;
};

OptForm.Button = function OptFormButton({ children, ...resProps }) {
  return (
    <Button {...resProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...resProps }) {
  return <Text {...resProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak() {
  return <Break />;
};

OptForm.Group = function OptFormGroup({ children, ...resProps }) {
  return <Group {...resProps}>{children} </Group>;
};
