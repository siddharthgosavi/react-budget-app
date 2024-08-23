import React from "react";
import { Button, Form, Modal, ModalActions, ModalContent, ModalHeader, Segment } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModelEdit({ isOpen, setIsOpen, description, setDescription, value, setValue, isExpense, setIsExpense }) {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader>Edit Entry</ModalHeader>
      <ModalContent>
      <Segment textAlign="center" color="blue">
      <Form unstackable>
        <EntryForm description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense} />
      </Form>
      </Segment>
      </ModalContent>
      <ModalActions>
        <Button content="Update" icon="checkmark" positive onClick={() => setIsOpen(false)} />
        <Button content="Cancel" color="red" icon="cancel" onClick={() => setIsOpen(false)} />
      </ModalActions>
    </Modal>
  );
}

export default ModelEdit;
