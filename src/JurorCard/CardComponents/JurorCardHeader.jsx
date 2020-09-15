import React from "react";
import { Typography, CardHeader, makeStyles } from "@material-ui/core";
import LoopIcon from "@material-ui/icons/Loop";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: "0",
    paddingBottom: "0",
    height: "auto",
    maxHeight: "20%",
    backgroundColor: "#bdbdbd",
  },
  actionButton: {
    paddingTop: "10px",
    minWidth: "32px",
  },
  jurorName: {
    margin: "0",
  },
}));

export default function JurorCardHeader(props) {
  const classes = useStyles();
  return (
    <CardHeader
      className={classes.header}
      title={
        <Typography className={classes.jurorName} variant="h6">
          {props.jurorName}
        </Typography>
      }
      action={
        <div>
          <Button
            className={classes.actionButton}
            onClick={() => props.switchAction(props.keyId)}
          >
            <LoopIcon color="action" />
          </Button>
          <Button
            className={classes.actionButton}
            onClick={() => props.closeAction(props.keyId)}
          >
            <CloseIcon color="action" />
          </Button>
        </div>
      }
    ></CardHeader>
  );
}
