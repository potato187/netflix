import Form from "components/form";
import React, { useState, useContext } from "react";
import { FirebaseContext } from "context/firebase";
import * as ROUTERS from "constants/routes";
import { useHistory } from "react-router-dom";

export default function SignInForm() {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [type, setType] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTERS.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  const handlePassword = (event) => {
    const { value } = event.target;
    if (value.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
    setPassword(value);
  };

  const handleChangeType = () => {
    return setType(!type);
  };

  return (
    <Form>
      <Form.Title>Sign In</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
      <Form.Base method="POST" autoCompleted="off" onSubmit={handleSignIn}>
        <Form.Wrapper>
          <Form.Group>
            <Form.Input
              type="email"
              name="email"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Label htmlFor="email">Email or phone number</Form.Label>
          </Form.Group>
          <Form.TextWarning>
            Please enter a valid email or phone number.
          </Form.TextWarning>
        </Form.Wrapper>

        <Form.Wrapper>
          <Form.Group>
            <Form.Input
              type={type ? "password" : "text"}
              name="password"
              value={password}
              onChange={handlePassword}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Show type="button" show={show} onClick={handleChangeType}>
              Show
            </Form.Show>
          </Form.Group>
          <Form.TextWarning>
            Your password must contain between 4 and 60 characters.
          </Form.TextWarning>
        </Form.Wrapper>
        <Form.Submit
          disabled={isInvalid}
          type="submit"
          onClick={(event) => handleSignIn(event)}
        >
          Sign In
        </Form.Submit>
      </Form.Base>
      <Form.GroupHelp justify="space-between" margin="0px 0px 30px 0px">
        <Form.CheckBox value="remember" id="remember" />
        <Form.LabelRemember htmlFor="remember">Remember me</Form.LabelRemember>
        <Form.Link to="/" under={1} color="#838383">
          Need help?
        </Form.Link>
      </Form.GroupHelp>

      <Form.Link to="/">
        <Form.GroupHelp>
          <Form.Icon src="/images/icons/fb-logo.png" alt="FaceBook" />
          <Form.TextSmall>Login width FaceBook</Form.TextSmall>
        </Form.GroupHelp>
      </Form.Link>

      <Form.GroupHelp margin="10px 0">
        <Form.Text>New to Netflix?</Form.Text>
        <Form.Link to="/sign-up" under={1} fz="16px" margin="0px 10px">
          Sign up now.
        </Form.Link>
      </Form.GroupHelp>

      <Form.GroupHelp>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you&#39;re not a
          bot.
          <Form.Link to="/sign-up" color="#0071eb" under={1}>
            Sign up now.
          </Form.Link>
        </Form.TextSmall>
      </Form.GroupHelp>
    </Form>
  );
}
