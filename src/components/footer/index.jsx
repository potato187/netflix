import React from "react";
import { Break, Column, Container, Link, Row, Text, Title } from "./styles/footer";

export default function Footer({ children, ...resPost }) {
  return <Container {...resPost}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...resPost }) {
  return <Row {...resPost}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...resPost }) {
  return <Column {...resPost}>{children}</Column>;
};

Footer.Title = function FooterTitle({ children, ...resPost }) {
  return <Title {...resPost}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...resPost }) {
  return <Text {...resPost}>{children}</Text>;
};

Footer.Link = function FooterLink({ children, ...resPost }) {
  return <Link {...resPost}>{children}</Link>;
};

Footer.Break = function FooterBreak({ ...resProps }) {
  return <Break {...resProps} />;
};
