import React from "react";
import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

function ConfirmationButton() {
  return (
    <ButtonGroup style={{ marginTop: 20, marginBottom: 20 }}>
      <Button primary>Save</Button>
      <ButtonOr />
      <Button>Cancel</Button>
    </ButtonGroup>
  );
}

export default ConfirmationButton;
