import { JurorType } from "../types/Jurors";
import { createLayoutFromJurors } from "./placeholders";

import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import Axios from "axios";
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://192.81.209.97:8000/api/";
const API_USERNAME = process.env.REACT_APP_API_USERNAME || "None";
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD || "None";
const API_CASE_SLUG = process.env.REACT_APP_API_CASE_SLUG;

interface ServerResponse {
  data: JurorType[];
}

export function fetchToken(username: string, password: string): void {
  const URL = API_BASE_URL + "api/auth/jwt/create";
  axios
    .post(URL, {
      username: username,
      password: password,
    })
    .then((response: AxiosResponse) => {
      console.log(response.data.access);
    })
    .catch((error: string) => {
      console.log(error);
    });
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

export function postRequest(URL: string, data: object) {
  Axios.post(URL, data)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("accessToken", res.data.access);
    })
    .catch((err) => {
      console.log(err);
    });
}
