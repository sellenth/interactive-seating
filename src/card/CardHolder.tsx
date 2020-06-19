import React, { FunctionComponent, useState } from "react";
import styles from "./CardHolder.module.scss";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { JurorType } from "../dummies/Jurors";

interface Props {
  juror?: JurorType;
  setVisibility?: CallableFunction;
  setCurrJuror?: CallableFunction;
}

function deactivateCard(setActive: CallableFunction){
  setActive(0)
}

export const CardHolder: FunctionComponent<Props> = ({ juror, setVisibility, setCurrJuror }) => {
  const [ activated, setActive ] = useState(1);
  if (juror && activated) {
    return (
      <Card
        bg="light"
        text="dark"
        style={{ height: "100%" }}
        className={styles.cardHolder}
      >
        <Button 
          variant="danger"
          className={styles.exitButton}
          size="sm"
          onClick={() => deactivateCard(setActive)}>
          <span>&times;</span>
        </Button>
        <Card.Body style={{ padding: "0px" }}>
          <Card.Header style={{padding: "0px"}} className={styles.cardHeader}>
            {juror.name}
          </Card.Header>
          <Card.Text className={styles.cardText}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container fluid>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  size="sm"
                  className={styles.cardButton}
                  onClick={() => {
                    if (setVisibility) {
                      setVisibility(true)
                    }
                    if (setCurrJuror){
                      setCurrJuror();
                    }
                  }}
                >
                  More Details
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  } else {
    return <div className={styles.blankHolder} />;
  }
};
