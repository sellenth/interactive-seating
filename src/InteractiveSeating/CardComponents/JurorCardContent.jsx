import React, { useContext } from "react";
import Colors from "../Colors";
import { CardContent, Avatar, Box, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import JurorCardScores from "./JurorCardScores";
import JurorsContext from "../JurorsContext";
import ColorHash from "color-hash/";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "0px",
    paddingBottom: "0px",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    alignItems: "center",
    justifyItems: "center",
  },
  topHalf: {
    padding: "0 10px",
  },
  avatar: {
    width: "auto",
    height: "auto",
    borderRadius: "50%",
    border: "3px solid",
  },
  bottomHalf: {
    display: "grid",
    gridTemplateRows: "2fr 1fr",
    padding: "10px",
  },
  editButton: {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    backgroundColor: Colors.light4,
    boxShadow: `0 4px 4px -1px ${Colors.light5}`,
  },
}));

export default function JurorCardContent(props) {
  const colorHash = new ColorHash();
  const classes = useStyles();
  const { JurorsData } = useContext(JurorsContext);
  return (
    <CardContent className={classes.content}>
      <Box className={classes.topHalf}>
        <Avatar
          variant="circle"
          style={{ borderColor: colorHash.hex(JurorsData[props.juror].name) }}
          alt={JurorsData[props.juror].name[0]}
          src={JurorsData[props.juror].imgUrl}
          className={classes.avatar}
        >
          {JurorsData[props.juror].name[0]}
        </Avatar>
      </Box>
      <Box className={classes.bottomHalf}>
        <JurorCardScores
          userScore={JurorsData[props.juror].userScore}
          aiScore={JurorsData[props.juror].aiScore}
        />
        <Button
          onClick={() => {
            props.openModal(props.juror);
          }}
          className={classes.editButton}
        >
          Edit
        </Button>
      </Box>
    </CardContent>
  );
}
