import React from "react";
import { FormCheckbox, FormGroup, FormInput } from "semantic-ui-react";

function EntryForm({ description, setDescription, value, setValue, isExpense, setIsExpense }) {
  return (
    <FormGroup>
      <FormInput icon="tags" width={8} label="Description" placeholder="New Shinny thing" value={description} onChange={e => setDescription(e.target.value)} />
      <FormInput icon="dollar" width={4} label="Value" placeholder="100.00" iconPosition="left" value={value} onChange={e => setValue(e.target.value)} />
      <FormCheckbox style={{ marginTop: 30 }} width={4} toggle label="Expense" checked={isExpense} onChange={() => setIsExpense(!isExpense)} />
    </FormGroup>
  );
}

export default EntryForm;
