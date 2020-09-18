import React, { useContext } from "react";
import { Card, makeStyles } from "@material-ui/core";
import Colors from "./Colors";
import JurorCardHeader from "./CardComponents/JurorCardHeader";
import JurorCardContent from "./CardComponents/JurorCardContent";
import JurorsContext from "./JurorsContext";

const useStyles = makeStyles((theme) => ({
  stack: {
    backgroundColor: Colors.light3,
    position: "absolute",
    top: "10px",
    left: "100px",
    maxWidth: "125px",
    boxShadow: `0 1px 1px rgba(0,0,0,0.15),
    0 10px 0 -5px ${Colors.light3},
    0 10px 1px -4px rgba(0,0,0,0.15),
    0 20px 0 -10px ${Colors.light3},
    0 20px 1px -9px rgba(0,0,0,0.15);
    `,
  },
}));

export default function CardStack(props) {
  const classes = useStyles();
  const { JurorsData } = useContext(JurorsContext);
  return props.juror ? (
    <>
      <Card className={classes.stack}>
        <JurorCardHeader
          keyId={props.keyId}
          inStack={true}
          switchAction={props.switchAction}
          closeAction={props.closeAction}
          jurorName={JurorsData[props.juror].name}
        />
        <JurorCardContent openModal={props.openModal} juror={props.juror} />
      </Card>
    </>
  ) : (
    <div>.</div>
  );
}
