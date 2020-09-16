import React, { useContext } from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import "./JurorCard.css";
import JurorCardScores from "./CardComponents/JurorCardScores";
import JurorCardHeader from "./CardComponents/JurorCardHeader";
import JurorsContext from "../JurorsContext";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#d5d5d5",
  },
  content: {
    display: "grid",
    height: "100%",
    gridTemplateColumns: "1fr 1fr",
  },
  avatar: {
    alignSelf: "center",
    width: "100%",
    height: "90%",
  },
  rightHalf: {
    display: "grid",
    gridTemplateRows: "2fr 1fr",
    padding: "10px",
  },
  editButton: {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    backgroundColor: "#bdbdbd",
  },
}));

export default function JurorCard(props) {
  const classes = useStyles();
  const { JurorsData } = useContext(JurorsContext);
  return props.juror ? (
    <>
      <Card className={classes.card}>
        <JurorCardHeader
          keyId={props.keyId}
          switchAction={props.switchAction}
          closeAction={props.closeAction}
          jurorName={JurorsData[props.juror].name}
        />
        <CardContent className={classes.content}>
          <Avatar
            variant="rounded"
            alt={JurorsData[props.juror].name[0]}
            src={JurorsData[props.juror].imgUrl}
            className={classes.avatar}
          >
            {JurorsData[props.juror].name[0]}
          </Avatar>
          <Box className={classes.rightHalf}>
            <JurorCardScores
              userScore={JurorsData[props.juror].userScore}
              aiScore={JurorsData[props.juror].aiScore}
            />
            <Button
              onClick={() => {
                props.openModal(props.juror);
              }}
              color="primary"
              className={classes.editButton}
            >
              Edit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  ) : (
    <div>.</div>
  );
}
