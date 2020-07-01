import React, { ReactElement } from "react";
import styles from "./Scan.module.scss";

interface Props {}

export default function Scan({}: Props): ReactElement {
  return <div className={styles.redBg}>Howdy</div>;
}
