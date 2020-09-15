import React, { useState } from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { Box, makeStyles } from "@material-ui/core";
import JurorCard from "./JurorCard/JurorCard";
import { JurorsProvider } from "./JurorsContext";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "5px",
  },
}));

function App() {
  const classes = useStyles();
  const [swapIdx, setSwapIdx] = useState();
  const [arrangement, setArrangement] = useState(
    Array.from(new Array(16), (val, index) => "juror" + index)
  );

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
    <ScopedCssBaseline>
      <JurorsProvider>
        <Box className={classes.cardWrapper}>
          {arrangement.map((jurorNumber, idx) => {
            return (
              <JurorCard
                juror={jurorNumber}
                key={idx}
                keyId={idx}
                switchAction={switchButton}
                closeAction={closeButton}
              />
            );
          })}
        </Box>
      </JurorsProvider>
    </ScopedCssBaseline>
  );
}

export default App;
