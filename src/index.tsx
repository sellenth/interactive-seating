import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CardView } from "./seating/CardView";
import * as serviceWorker from "./serviceWorker";
import { dummyJurors, JurorType } from './dummies/Jurors';

function generateJurors(number: number){
  const Jurors = []
  for (let i = 0; i < number; i++){
    Jurors.push({
      name: `Juror ${i}`,
      age: 22
    })
  }
  return Jurors;
}

function createLayoutFromJurors(jurors: JurorType[]): ReactGridLayout.Layout[]{
  const sideLength = Math.ceil(Math.sqrt(jurors.length));
  let x: number = 0;
  let y: number = 0;
  const layout = [];
  for (let i = 0; i < sideLength ** 2; i++){
    layout.push({
      i: i.toString(),
      x: x,
      y: y,
      w: 1,
      h: 1,
    })
    x += 1
    if ( x >= sideLength ){
      x = 0;
      y += 1;
    }
  }
  return layout;

}

export function TestEnv() {
  const jurors = generateJurors(10);
  const layout = createLayoutFromJurors(jurors);
  console.log(layout)
  return (
    <CardView layout={layout} jurors={jurors}/>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <TestEnv />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
