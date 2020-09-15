import React, { useContext } from "react";
import "./JurorCard.css";
import GenderRadio from "./SelectionOptions/GenderRadio";
import RaceRadio from "./SelectionOptions/RaceRadio";
import MaritalRadio from "./SelectionOptions/MaritalRadio";
import HousingRadio from "./SelectionOptions/HousingRadio";
import LoopIcon from "@material-ui/icons/Loop";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import OccupationInput from "./SelectionOptions/OccupationInput";
import JurorsContext from "../JurorsContext";

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      marginDense: {
        margin: 0,
        marginTop: 0,
        marginBottom: 0,
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: "translate(0, 12px) scale(1)",
      },
    },
    MuiRadio: {
      root: {
        padding: 3,
      },
    },
    MuiButton: {
      text: {
        padding: 0,
      },
    },
    MuiSvgIcon: {
      root: {
        width: ".3em",
      },
      colorAction: {
        width: ".7em",
      },
    },
  },
});

export default function JurorCard(props) {
  const { JurorsData } = useContext(JurorsContext);
  return props.juror === "N/A" ? (
    <div>.</div>
  ) : (
    <ThemeProvider theme={theme}>
      <div className="card">
        <div className="header">
          <div className="jurorName">{JurorsData[props.juror].name}</div>
          <div className="swapButton">
            <Button onClick={() => props.switchAction(props.keyId)}>
              <LoopIcon color="action" className="swapIcon" />
            </Button>
          </div>
          <div className="blankButton">
            <Button onClick={() => props.closeAction(props.keyId)}>
              <CloseIcon color="action" className="closeIcon" />
            </Button>
          </div>
        </div>
        <div className="body">
          <div className="row1">
            <GenderRadio juror={props.juror}></GenderRadio>
            <RaceRadio juror={props.juror}></RaceRadio>
            <MaritalRadio juror={props.juror}></MaritalRadio>
          </div>
          <div className="row2">
            <HousingRadio juror={props.juror}></HousingRadio>
            <OccupationInput juror={props.juror}></OccupationInput>
          </div>
          <div className="row3">.</div>
          <div className="row4">.</div>
          <div className="row5">.</div>
          <div className="row6">.</div>
          <div className="cause">.</div>
          <div className="misc">.</div>
          <div className="score">.</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
