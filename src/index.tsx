import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CardView } from "./seating/CardView";
import * as serviceWorker from "./serviceWorker";
import { NewJurorType } from './types/Jurors';

interface ServerResponse {
  data: NewJurorType[]
}

const axios = require('axios').default;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://192.81.209.97:8000/api/'; //hosted ip doesn't work for me
const API_USERNAME = process.env.REACT_APP_API_USERNAME;
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD;
const API_CASE_SLUG = process.env.REACT_APP_API_CASE_SLUG;

function fetchJurors(setJurors: CallableFunction, setLayout: CallableFunction){
  const URL = API_BASE_URL + 'api/jurors/' + 
    API_CASE_SLUG + '/?format=json';
  axios.get(URL, {
    auth: {
      username: API_USERNAME,
      password: API_PASSWORD 
    }
  })
  .then((response: ServerResponse) => {
    setJurors(response.data);
    setLayout(createLayoutFromJurors(response.data))
  })
  .catch(function (error: String) {
    // handle error
    console.log(error);
  })
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateJurors(number: number): NewJurorType[]{
  const Jurors: NewJurorType[] = []
  for (let i = 0; i < number; i++){
    Jurors.push({
      first_name: `Juror ${i}`,
      risk_score_ai: getRandomInt(100).toString()
    }) }
   return Jurors;
}

function createLayoutFromJurors(jurors: NewJurorType[]): ReactGridLayout.Layout[]{
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
  //const jurors = generateJurors(8);
  //const layout = createLayoutFromJurors(jurors);

  const [ jurors, setJurors ] = useState([]);
  const [ layout, setLayout ] = useState([]);
  useEffect(() => {
    fetchJurors(setJurors, setLayout);
  }, [])


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