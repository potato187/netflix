import { Button } from "components/opt-form/styles/opt-form";
import React, { createContext, useContext, useState } from "react";

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
  ButtonShowPassWord,
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
  const [error, setError] = useState("");

  const store = {
    Focus: [focus, setFocus],
    Error: [error, setError],
  };

  return (
    <StateContext.Provider value={store}>
      <Wrapper {...restProps}>{children}</Wrapper>
    </StateContext.Provider>
  );
};

Form.InputPassWord = function FormInputPassWord({
  password = "",
  setPassword = null,
  handleOnChange = null,
  ...restProps
}) {
  const { Focus, Error } = useContext(StateContext);
  const [focus, setFocus] = Focus;
  const [error, setError] = Error;
  const [typeInput, setTypeInput] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleOnBlur = (event) => {
    const { value } = event.target;
    const len = value.length;
    if (len >= 6) {
      setError("");
    }

    if (len >= 0 && len <= 5) {
      setError("Your password must be contained about 6 to 60 characters.");
    }

    return len > 0 ? setFocus(true) : setFocus(false);
  };

  const handleOnFocus = () => {
    setFocus(true);
  };

  const handleOnKeyDown = (event) => {
    const { value } = event.target;
    if (value.length >= 1) {
      setChecked(true);
    }
    if (value.length > 5) {
      setError("");
    }
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    setTypeInput(!typeInput);
  };

  const handlePassword = (event) => {
    if (handleOnChange) {
      handleOnChange(event, setPassword);
    }
  };

  return (
    <>
      <Input
        type={typeInput ? "password" : "text"}
        id="password"
        name="password"
        focus={focus}
        onBlur={(event) => handleOnBlur(event)}
        onFocus={handleOnFocus}
        onKeyDown={(event) => handleOnKeyDown(event)}
        value={password}
        onChange={handlePassword}
        {...restProps}
      />

      <Label htmlFor="password">Password</Label>
      <ButtonShowPassWord
        show={checked}
        typeInput="button"
        onClick={(event) => handleOnClick(event)}
      >
        {typeInput ? "Show" : "Hide"}
      </ButtonShowPassWord>
    </>
  );
};

Form.Input = function FormInput({ type, ...restProps }) {
  const { Focus, Error, Warn } = useContext(StateContext);
  const [focus, setFocus] = Focus;
  const [error, setError] = Error;

  const handleOnBlur = (event) => {
    const { value, name } = event.target;

    if (value.length >= 0 && value.length <= 5) {
      if (name === "email") {
        setError("Please enter a valid email.");
      }
      if (name === "firstName") {
        setError("Your name must contain between 4 and 20 characters.");
      }
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
  const { Error, Warn } = useContext(StateContext);
  const [error, setError] = Error;

  return <TextWarning {...restProps}>{error}</TextWarning>;
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
