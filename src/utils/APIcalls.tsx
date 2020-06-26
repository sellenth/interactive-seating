import { JurorType } from "../types/Jurors";
import { createLayoutFromJurors } from "./placeholders";

import axios from "axios";
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://192.81.209.97:8000/api/";
const API_USERNAME = process.env.REACT_APP_API_USERNAME || "None";
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD || "None";
const API_CASE_SLUG = process.env.REACT_APP_API_CASE_SLUG;

interface ServerResponse {
  data: JurorType[];
}

export function fetchJurors(
  setJurors: CallableFunction,
  setLayout: CallableFunction
): void {
  const URL = API_BASE_URL + "api/jurors/" + API_CASE_SLUG + "/?format=json";
  axios
    .get(URL, {
      auth: {
        username: API_USERNAME,
        password: API_PASSWORD,
      },
    })
    .then((response: ServerResponse) => {
      setJurors(response.data);
      setLayout(createLayoutFromJurors(response.data));
    })
    .catch(function (error: string) {
      // handle error
      console.log(error);
    });
}
