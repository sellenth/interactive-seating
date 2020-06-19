import React, { FunctionComponent } from "react";
import styles from "./CardHolder.module.scss";
import { JurorType } from "../../dummies/Jurors";

interface Props {
  juror?: JurorType;
}

export const CardHolder: FunctionComponent<Props> = ({ juror }) => {
  if ( juror ){
    return (
      <div className={styles.cardHolder}>
        <p>{juror.name}</p>
      </div>
    )
  } else {
    return (
      <div className={styles.blankHolder} />
    )

  }
}
