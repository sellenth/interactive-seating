import React, { useState } from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { Box, makeStyles } from "@material-ui/core";
import JurorCard from "./JurorCard";
import JurorModal from "./JurorModal";
import CardStack from "./CardStack";
import { JurorsProvider, numJurors } from "./JurorsContext";
import Colors from "./Colors";

const jurorsInBox = 6;

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    margin: "3% auto",
    width: "fit-content",
    backgroundColor: Colors.light1,
    display: "grid",
    position: "relative",
    gridTemplateColumns: `repeat(${jurorsInBox}, 1fr)`,
    gap: "5px",
  },
  cheek: {
    backgroundColor: "red",
    position: "absolute",
    left: "100px",
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currJuror, setCurrJuror] = React.useState("juror1");
  const [swapIdx, setSwapIdx] = useState();
  const [jurorOnDeck, setJurorOnDeck] = useState(jurorsInBox);
  const [arrangement, setArrangement] = useState(
    Array.from(new Array(jurorsInBox), (val, index) => "juror" + index)
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

  const nextJurorOnDeck = () => {
    if (jurorOnDeck + 1 < numJurors) {
      setJurorOnDeck(jurorOnDeck + 1);
    } else {
      setJurorOnDeck("");
    }
  };

  const closeButton = (currIdx) => {
    setArrangement((currArrangment) => {
      const arrangement = [...currArrangment];
      arrangement[currIdx] = `juror${jurorOnDeck}`;
      nextJurorOnDeck();
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
        <CardStack
          juror={jurorOnDeck ? `juror${jurorOnDeck}` : ""}
          openModal={handleOpen}
        />
      </JurorsProvider>
    </ScopedCssBaseline>
  );
}

export default App;
