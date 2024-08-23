import React from "react";
import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

function ConfirmationButton({ addEntry }) {
  return (
    <ButtonGroup style={{ marginTop: 20 }}>
      <Button primary onClick={() => addEntry()}>
        Save
      </Button>
      <ButtonOr />
      <Button>Cancel</Button>
    </ButtonGroup>
  );
}

export default ConfirmationButton;
