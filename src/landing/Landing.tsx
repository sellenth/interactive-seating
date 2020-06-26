import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Landing(): ReactElement {
  return (
    <Container className={styles.container}>
      <Row>
        <Col className={styles.col}>
          <Link to="/seating">
            <Button className={styles.btn} size="lg" variant="outline-primary">
              Goto
              <br />
              Seating
            </Button>
          </Link>
        </Col>
        <Col className={styles.col}>
          <Link to="/scan">
            <Button className={styles.btn} size="lg" variant="outline-primary">
              Goto
              <br />
              Scanning
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
