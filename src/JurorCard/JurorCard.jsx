import React from "react";
import "./JurorCard.css";
import GenderRadio from "./SelectionOptions/GenderRadio";
import RaceRadio from "./SelectionOptions/RaceRadio";
import MaritalRadio from "./SelectionOptions/MaritalRadio";
import HousingRadio from "./SelectionOptions/HousingRadio";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import OccupationInput from "./SelectionOptions/OccupationInput";

const theme = createMuiTheme({
  overrides: {
    MuiRadio: {
      root: {
        padding: 3,
      },
    },
    MuiSvgIcon: {
      root: {
        width: ".5em",
      },
    },
  },
});

export default function JurorCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="card">
        <div className="header">
          <div className="jurorName">{props.data.name}</div>
          <div className="swapButton">.</div>
          <div className="blankButton">.</div>
        </div>
        <div className="body">
          <div className="row1">
            <GenderRadio></GenderRadio>
            <RaceRadio></RaceRadio>
            <MaritalRadio></MaritalRadio>
          </div>
          <div className="row2">
            <HousingRadio></HousingRadio>
            <OccupationInput></OccupationInput>
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
