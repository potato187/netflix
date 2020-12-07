import { OptForm } from "components";
import React from "react";

export default function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
      <OptForm.Group>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Break />
        <OptForm.Button>GET STARTED</OptForm.Button>
      </OptForm.Group>
    </OptForm>
  );
}
