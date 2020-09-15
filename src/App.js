import React, { useState } from "react";
//a very fun bug. Removing this unused button import causes
//a styling issue with the occupation text input
import { Button } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import JurorCard from "./JurorCard/JurorCard";
import { JurorsProvider } from "./JurorsContext";
import "./App.css";

function App() {
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
      arrangement[currIdx] = "N/A";
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
        <div className="CardWrapper">
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
        </div>
      </JurorsProvider>
    </ScopedCssBaseline>
  );
}

export default App;
