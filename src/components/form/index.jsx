import React, { createContext, useContext, useState } from "react";
import { validEmail } from "utils";
import {
  Base,
  CheckBox,
  Container,
  Error,
  Group,
  GroupHelp,
  Input,
  Label,
  LabelRemember,
  Link,
  Show,
  Submit,
  Text,
  TextSmall,
  TextWarning,
  Title,
  Wrapper,
  Icon,
  Inner,
} from "./styles/form";

const StateContext = createContext();

export default function Form({ children, ...restProps }) {
  return (
    <Container>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Group = function FormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Form.Wrapper = function FormWrapper({ children, ...restProps }) {
  const [focus, setFocus] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState("");

  const store = {
    FOCUS: [focus, setFocus],
    ERROR: [error, setError],
    WARN: [warning, setWarning],
  };

  return (
    <StateContext.Provider value={store}>
      <Wrapper {...restProps}>{children}</Wrapper>
    </StateContext.Provider>
  );
};

Form.Input = function FormInput({ ...restProps }) {
  const { FOCUS, ERROR, WARN } = useContext(StateContext);
  const [focus, setFocus] = FOCUS;
  const [error, setError] = ERROR;
  const [warning, setWarning] = WARN;

  const handleOnBlur = (event) => {
    const { value, type } = event.target;

    if (value.length < 6) {
      if (type === "email") {
        setError("Please enter a valid email.");
      }
      if (type === "password" || type === "text") {
        setError("Your password must contain between 6 and 60 characters.");
      }
      setWarning(true);
    } else {
      setError("");
    }

    return value.length > 0 ? setFocus(true) : setFocus(false);
  };

  const handleOnFocus = () => {
    setFocus(true);
  };

  const handleOnKeyDown = (event) => {
    const { value } = event.target;
    if (value.length > 5) {
      setError("");
      setWarning(false);
    }
  };

  return (
    <Input
      {...restProps}
      focus={focus}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onKeyUp={handleOnKeyDown}
    />
  );
};

Form.TextWarning = function FormTextWarning({ children, ...restProps }) {
  const { ERROR, WARN } = useContext(StateContext);
  const [error, setError] = ERROR;

  return (
    <TextWarning warning={!WARN.warning} {...restProps}>
      {error}
    </TextWarning>
  );
};

Form.Link = function FormLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Form.Label = function FormLabel({ children, htmlFor, ...restProps }) {
  return (
    <Label htmlFor={htmlFor} {...restProps}>
      {children}
    </Label>
  );
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Show = function FormShow({ children, ...restProps }) {
  return <Show {...restProps}>{children}</Show>;
};

Form.GroupHelp = function FormGroupHelp({ children, ...restProps }) {
  return <GroupHelp {...restProps}>{children}</GroupHelp>;
};

Form.CheckBox = function FormCheckBox({ ...restProps }) {
  return <CheckBox type="checkbox" {...restProps} />;
};

Form.LabelRemember = function FormLabelRemember({ ...restProps }) {
  return <LabelRemember type="checkbox" {...restProps} />;
};

Form.Icon = function FormIcon({ src, alt, ...restProps }) {
  return <Icon src={src} alt={alt} />;
};
Form.defaultProps = {
  to: "/home",
};
