import React, { useContext } from "react";
import { Card, makeStyles } from "@material-ui/core";
import Colors from "./Colors";
import JurorCardHeader from "./CardComponents/JurorCardHeader";
import JurorCardContent from "./CardComponents/JurorCardContent";
import JurorsContext from "./JurorsContext";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: Colors.light2,
    maxWidth: "125px",
  },
}));

export default function JurorCard(props) {
  const classes = useStyles();
  const { JurorsData } = useContext(JurorsContext);
  return props.juror ? (
    <>
      <Card
        style={{
          backgroundColor: `${
            props.swapIdx === props.keyId ? Colors.light5 : Colors.light3
          }`,
        }}
        className={classes.card}
      >
        <JurorCardHeader
          keyId={props.keyId}
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
