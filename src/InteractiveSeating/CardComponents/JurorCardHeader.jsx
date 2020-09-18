import React, { useState } from "react";
import Colors from "../Colors";
import { Typography, CardHeader, makeStyles } from "@material-ui/core";
import LoopIcon from "@material-ui/icons/Loop";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: "0",
    paddingBottom: "0",
    height: "50px",
    maxHeight: "20%",
    backgroundColor: Colors.light4,
    position: "relative",
    boxShadow: `0 4px 4px -1px ${Colors.light5}`,
    overflow: "hidden",
  },
  actionButton: {
    position: "absolute",
    right: "-5px",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
  },
  swapButton: {
    height: "fit-content",
    paddingBottom: "0px",
    paddingTop: "10px",
    minWidth: "32px",
  },
  deleteButton: {
    paddingTop: "0px",
    height: "fit-content",
    minWidth: "32px",
  },
  jurorName: {
    width: "50%",
  },
}));

export default function JurorCardHeader(props) {
  const classes = useStyles();
  return (
    <CardHeader
      className={classes.header}
      title={
        <Typography className={classes.jurorName}>{props.jurorName}</Typography>
      }
      action={
        props.inStack ? (
          ""
        ) : (
          <div className={classes.actionButton}>
            <Button
              className={classes.swapButton}
              onClick={() => {
                props.switchAction(props.keyId);
              }}
            >
              <LoopIcon color="action" />
            </Button>
            {
              <Button
                className={classes.deleteButton}
                onClick={() => props.closeAction(props.keyId)}
              >
                <CloseIcon color="action" />
              </Button>
            }
          </div>
        )
      }
    ></CardHeader>
  );
}
