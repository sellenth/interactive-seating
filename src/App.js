import React from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import JurorCard from "./JurorCard/JurorCard";
import "./App.css";

const ExData = {
  name: "Halston",
};

function App() {
  return (
    <ScopedCssBaseline>
      <JurorCard data={ExData}></JurorCard>
    </ScopedCssBaseline>
  );
}

export default App;
