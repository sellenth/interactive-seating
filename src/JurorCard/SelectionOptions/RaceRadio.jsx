import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RaceRadio(props) {
  const [race, setRace] = React.useState("");

  const handleChange = (event) => {
    setRace(event.target.value);
  };

  return (
    <FormControl component="fieldset" margin="dense">
      <FormLabel component="legend">Race</FormLabel>
      <RadioGroup
        row
        aria-label="race"
        name="race1"
        value={race}
        onChange={handleChange}
      >
        <FormControlLabel value="W" control={<Radio />} label="W" />
        <FormControlLabel value="B" control={<Radio />} label="B" />
        <FormControlLabel value="H" control={<Radio />} label="H" />
        <FormControlLabel value="A" control={<Radio />} label="A" />
      </RadioGroup>
    </FormControl>
  );
}
