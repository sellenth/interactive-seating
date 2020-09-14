import React from "react";
import TextField from "@material-ui/core/TextField";

export default function OccupationInput(props) {
  const [occupation, setOccupation] = React.useState("");

  const handleChange = (event) => {
    setOccupation(event.target.value);
  };

  return (
    <form style={{ display: "inline" }} noValidate autoComplete="off">
      <TextField onChange={handleChange} label="Occupation" />
    </form>
  );
}
