import Form from "components/form";
import React, { useState, useContext } from "react";
import { FirebaseContext } from "context/firebase";
import * as ROUTERS from "constants/routes";
import { useHistory } from "react-router-dom";
import { handleOnChange } from "utils";

export default function SignUpForm() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || email === "" || password === "";

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) =>
        res.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5 + 1),
          })
          .then(() => {
            history.push(ROUTERS.BROWSE);
          })
      )
      .catch((err) => {
        setEmail("");
        setPassword("");
        setFirstName("");
        setError(err.message);
      });
  };

  return (
    <Form>
      <Form.Title>Sign Up</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
      <Form.Base method="POST" autocompleted="off">
        <Form.Wrapper>
          <Form.Group>
            <Form.Input
              type="text"
              name="firstName"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Label htmlFor="firstName">firstName</Form.Label>
          </Form.Group>
          <Form.TextWarning />
        </Form.Wrapper>

        <Form.Wrapper>
          <Form.Group>
            <Form.Input
              type="email"
              name="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Label htmlFor="email">email</Form.Label>
          </Form.Group>
          <Form.TextWarning />
        </Form.Wrapper>

        <Form.Wrapper>
          <Form.Group>
            <Form.InputPassWord
              setPassword={setPassword}
              password={password}
              handleOnChange={handleOnChange}
            />
          </Form.Group>
          <Form.TextWarning />
        </Form.Wrapper>

        <Form.Submit
          disabled={isInvalid}
          type="submit"
          onClick={(event) => handleSignUp(event)}
        >
          Sign Up
        </Form.Submit>
      </Form.Base>
      <Form.GroupHelp margin="10px 0">
        <Form.Text>Already a user?</Form.Text>
        <Form.Link to="/sign-in" under={1} fz="16px" margin="0px 10px">
          Sign In now.
        </Form.Link>
      </Form.GroupHelp>
      <Form.GroupHelp>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you&#39;re not a
          bot.
          <Form.Link to="/sign-up" color="#0071eb" under={1}>
            Sign in now.
          </Form.Link>
        </Form.TextSmall>
      </Form.GroupHelp>
    </Form>
  );
}
