import React, { ReactElement } from "react";
import styles from "./Card.module.scss";

interface Props {
    key: string
}

export default function Card({key}: Props): ReactElement {
  return <div className={styles.cardHolder} key={key}>hi</div>;
}
