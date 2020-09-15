import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import JurorsContext from "../../JurorsContext";

export default function GenderRadio(props) {
  const { JurorsData, setJuror } = useContext(JurorsContext);

  const handleChange = (event) => {
    setJuror("gender", event.target.value, props.juror);
  };

  return (
    <FormControl component="fieldset" margin="dense">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="gender1"
        value={JurorsData[props.juror].gender}
        onChange={handleChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="M" />
        <FormControlLabel value="female" control={<Radio />} label="F" />
      </RadioGroup>
    </FormControl>
  );
}
