import React, { useState } from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { Box, makeStyles } from "@material-ui/core";
import JurorCard from "./JurorCard";
import JurorModal from "./JurorModal";
import { JurorsProvider } from "./JurorsContext";
import Colors from "./Colors";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    margin: "3% auto",
    width: "fit-content",
    backgroundColor: Colors.light1,
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "5px",
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currJuror, setCurrJuror] = React.useState("juror1");
  const [swapIdx, setSwapIdx] = useState();
  const [arrangement, setArrangement] = useState(
    Array.from(new Array(6), (val, index) => "juror" + index)
  );
  const handleOpen = (currJuror) => {
    setCurrJuror(currJuror);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const switchButton = (currIdx) => {
    if (swapIdx !== undefined) {
      performSwitch(currIdx, swapIdx);
      setSwapIdx((swapIdx) => undefined);
    } else {
      setSwapIdx((swapIdx) => currIdx);
    }
  };

  const closeButton = (currIdx) => {
    setArrangement((currArrangment) => {
      const arrangement = [...currArrangment];
      arrangement[currIdx] = "";
      return arrangement;
    });
  };

  const performSwitch = (firstIdx, secondIdx) => {
    setArrangement((currArrangment) => {
      const arrangement = [...currArrangment];
      const tmp = arrangement[firstIdx];
      arrangement[firstIdx] = arrangement[secondIdx];
      arrangement[secondIdx] = tmp;
      return arrangement;
    });
  };

  return (
    <ScopedCssBaseline style={{ backgroundColor: Colors.light1 }}>
      <JurorsProvider>
        <Box className={classes.cardWrapper}>
          {arrangement.map((jurorNumber, idx) => {
            return (
              <JurorCard
                openModal={handleOpen}
                juror={jurorNumber}
                key={idx}
                keyId={idx}
                swapIdx={swapIdx}
                switchAction={switchButton}
                closeAction={closeButton}
              />
            );
          })}
        </Box>
        <JurorModal
          open={open}
          handleClose={handleClose}
          currJuror={currJuror}
        />
      </JurorsProvider>
    </ScopedCssBaseline>
  );
}

export default App;
