import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { JurorType } from "types/Jurors";

interface Props {
  visible: boolean;
  setVisibility: CallableFunction;
  juror?: JurorType;
}

export const JurorModal = ({ visible, setVisibility, juror }: Props) => {
  const handleClose = () => setVisibility(false);
  const handleShow = () => setVisibility(true);

  if (juror) {
    return (
      <Modal show={visible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{juror.first_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Risk Score (AI): ${juror.risk_score_ai}`}</Modal.Body>
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
  } else {
    return (
      <div>
        <h1>Modal Placeholder</h1>
      </div>
    );
  }
};
