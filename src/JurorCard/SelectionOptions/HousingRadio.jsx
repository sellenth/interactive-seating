import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import JurorsContext from "../../JurorsContext";

export default function HousingRadio(props) {
  const { JurorsData, setJuror } = useContext(JurorsContext);

  const handleChange = (event) => {
    setJuror("housing", event.target.value, props.juror);
  };

  return (
    <FormControl component="fieldset" margin="dense">
      <FormLabel component="legend">Housing</FormLabel>
      <RadioGroup
        row
        aria-label="housing"
        name="housing1"
        value={JurorsData[props.juror].housing}
        onChange={handleChange}
      >
        <FormControlLabel value="own" control={<Radio />} label="Own" />
        <FormControlLabel value="rent" control={<Radio />} label="Rent" />
      </RadioGroup>
    </FormControl>
  );
}
