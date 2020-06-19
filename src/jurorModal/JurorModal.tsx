import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { JurorType } from "../dummies/Jurors";

interface Props {
  visible: Boolean;
  setVisibility: CallableFunction;
  juror: JurorType;
}

export const JurorModal = ({ visible, setVisibility, juror }: Props) => {
  const handleClose = () => setVisibility(false);
  const handleShow = () => setVisibility(true);

  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{juror.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Age: ${juror.age}`}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
