import React from "react";
import { Form, FormGroup, FormInput } from "semantic-ui-react";
import ConfirmationButton from "./ConfirmationButton";

function NewEntryForm() {
  return (
    <Form unstackable>
      <FormGroup>
        <FormInput icon="tags" width={12} label="Description" placeholder="New Shinny thing" />
        <FormInput icon="dollar" width={4} label="Value" placeholder="100.00" iconPosition="left" />
      </FormGroup>
      <ConfirmationButton />
    </Form>
  );
}

export default NewEntryForm;
