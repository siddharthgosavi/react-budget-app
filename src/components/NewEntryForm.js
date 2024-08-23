import React from "react";
import { Form, Segment } from "semantic-ui-react";
import ConfirmationButton from "./ConfirmationButton";
import EntryForm from "./EntryForm";

function NewEntryForm({ addEntry, description, setDescription, value, setValue, isExpense, setIsExpense }) {
  return (
    <Segment textAlign="center" color="blue">
      <Form unstackable>
        <EntryForm description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense} />
        <ConfirmationButton addEntry={addEntry} />
      </Form>
    </Segment>
  );
}

export default NewEntryForm;
