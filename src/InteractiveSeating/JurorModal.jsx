import React, { useContext } from "react";
import { Modal, Box, Button, makeStyles } from "@material-ui/core";
import GenderRadio from "./SelectionOptions/GenderRadio";
import RaceRadio from "./SelectionOptions/RaceRadio";
import MaritalRadio from "./SelectionOptions/MaritalRadio";
import HousingRadio from "./SelectionOptions/HousingRadio";
import OccupationInput from "./SelectionOptions/OccupationInput";
import Colors from "./Colors";
import JurorsContext from "./JurorsContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: Colors.light1,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function JurorModal(props) {
  const classes = useStyles();
  const { JurorsData } = useContext(JurorsContext);
  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="juror-modal"
      aria-describedby="containts-juror-form"
    >
      <Box className={classes.paper}>
        <h1>{JurorsData[props.currJuror].name}</h1>
        <div className="row1">
          <GenderRadio juror={props.currJuror}></GenderRadio>
          <RaceRadio juror={props.currJuror}></RaceRadio>
          <MaritalRadio juror={props.currJuror}></MaritalRadio>
        </div>
        <div className="row2">
          <HousingRadio juror={props.currJuror}></HousingRadio>
          <OccupationInput juror={props.currJuror}></OccupationInput>
        </div>
        <div className="row3">.</div>
        <div className="row4">.</div>
        <div className="row5">.</div>
        <div className="row6">.</div>
        <div className="cause">.</div>
        <div className="misc">.</div>
        <div className="score">.</div>
        <Button onClick={props.handleClose}>Close</Button>
      </Box>
    </Modal>
  );
}
