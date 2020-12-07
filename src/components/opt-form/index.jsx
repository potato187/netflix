import React from "react";
import {
  Break,
  Button,
  Container,
  Group,
  Input,
  Text,
} from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <span />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak() {
  return <Break />;
};

OptForm.Group = function OptFormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children} </Group>;
};
