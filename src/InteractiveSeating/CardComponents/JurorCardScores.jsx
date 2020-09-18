import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import Colors from "../Colors";

const useStyles = makeStyles((theme) => ({
  scores: {
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    backgroundColor: "#bdbdbd",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignContent: "center",
  },
  score: {
    justifySelf: "center",
    alignSelf: "center",
  },
  scoreNumber: {
    textAlign: "center",
  },
  scoreLabel: {
    fontSize: ".8em",
    margin: "0 auto",
    width: "50%",
    textAlign: "center",
  },
}));

export default function Scores(props) {
  const classes = useStyles();
  return (
    <Box className={classes.scores}>
      <Box className={classes.score}>
        <Typography className={classes.scoreNumber} variant="h3">
          {props.userScore}
        </Typography>
        <Typography className={classes.scoreLabel} variant="subtitle1">
          User Score
        </Typography>
      </Box>
      <Box className={classes.score}>
        <Typography className={classes.scoreNumber} variant="h3">
          {props.aiScore}
        </Typography>
        <Typography className={classes.scoreLabel} variant="subtitle1">
          AI Score
        </Typography>
      </Box>
    </Box>
  );
}
