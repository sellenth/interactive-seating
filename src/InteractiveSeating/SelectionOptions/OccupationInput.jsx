import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import JurorsContext from "../JurorsContext";

export default function OccupationInput(props) {
  const { JurorsData, setJuror } = useContext(JurorsContext);

  const handleChange = (event) => {
    setJuror("occupation", event.target.value, props.juror);
  };

  return (
    <form style={{ display: "inline" }} noValidate autoComplete="off">
      <TextField
        value={JurorsData[props.juror].occupation}
        onChange={handleChange}
        label="Occupation"
      />
    </form>
  );
}
