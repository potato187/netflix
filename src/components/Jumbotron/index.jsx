import React from "react";
import {
  Container,
  Pane,
  SubTitle,
  Title,
  Wrapper,
  Image,
  Item,
} from "./styles/jumbo";

export default function Jumbotron({ direction, children, ...restProps }) {
  return (
    <Item {...restProps}>
      <Wrapper direction={direction}> {children}</Wrapper>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Jumbotron.defaultProps = {
  direction: "row",
};
