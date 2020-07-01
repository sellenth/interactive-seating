import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./login/Login";

export default function Landing(): ReactElement {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className={styles.center}>
      <Container>
        {accessToken === null && (
          <Row className={styles.marginBottom}>
            <Col>
              <Login />
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <Link to="/seating">
              <Button
                className={styles.btn}
                size="lg"
                variant="outline-primary"
              >
                Goto
                <br />
                Seating
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/scan">
              <Button
                className={styles.btn}
                size="lg"
                variant="outline-primary"
              >
                Goto
                <br />
                Scanning
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
