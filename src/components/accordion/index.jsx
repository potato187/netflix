import React, { createContext, useContext, useState } from "react";
import {
  Body,
  Container,
  Header,
  Inner,
  Item,
  Title,
  Toggle,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...resProps }) {
  return (
    <Container {...resProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...resProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...resProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...resProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...resProps}
    >
      {children}
      <Toggle toggle={toggleShow} />
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...resProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body toggle={toggleShow} {...resProps}>
      {children}
    </Body>
  );
};
