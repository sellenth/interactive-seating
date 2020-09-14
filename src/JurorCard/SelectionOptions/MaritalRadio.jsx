import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function MaritalRadio(props) {
  const [maritalStatus, setMaritalStatus] = React.useState("");

  const handleChange = (event) => {
    setMaritalStatus(event.target.value);
  };

  return (
    <FormControl component="fieldset" margin="dense">
      <FormLabel component="legend">Marital Status</FormLabel>
      <RadioGroup
        row
        aria-label="maritalStatus"
        name="marital1"
        value={maritalStatus}
        onChange={handleChange}
      >
        <FormControlLabel value="single" control={<Radio />} label="Sin" />
        <FormControlLabel value="married" control={<Radio />} label="Mar" />
        <FormControlLabel value="divorced" control={<Radio />} label="Div" />
        <FormControlLabel value="separated" control={<Radio />} label="Sep" />
        <FormControlLabel value="widowed" control={<Radio />} label="Wid" />
      </RadioGroup>
    </FormControl>
  );
}
