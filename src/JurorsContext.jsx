import React, { Component } from "react";
import Chance from "chance";

const JurorsContext = React.createContext();

function generateJuror() {
  const chance = new Chance();
  return {
    name: chance.name(),
    imgUrl:
      "https://en.gravatar.com/userimage/192664260/2218fe5f3bf980f07c7713bd6ad345ec.jpeg",
    userScore: chance.integer({ min: 0, max: 10 }),
    aiScore: chance.integer({ min: 0, max: 10 }),
    race: "",
    marital: "",
    housing: "",
    occupation: "",
  };
}

function genereateJurors() {
  const jurors = {};
  for (var i = 0; i < 25; i++) {
    jurors[`juror${i}`] = generateJuror();
  }
  return jurors;
}

class JurorsProvider extends Component {
  // Context state
  state = genereateJurors();

  // Method to update state
  setJuror = (field, newInfo, jurorNumber) => {
    this.setState({
      ...this.state,
      [jurorNumber]: {
        ...this.state[jurorNumber],
        [field]: newInfo,
      },
    });
  };

  render() {
    const { children } = this.props;
    const JurorsData = this.state;
    const { setJuror } = this;

    return (
      <JurorsContext.Provider
        value={{
          JurorsData,
          setJuror,
        }}
      >
        {children}
      </JurorsContext.Provider>
    );
  }
}

export const JurorsConsumer = JurorsContext.Consumer;
export { JurorsProvider };
export default JurorsContext;
