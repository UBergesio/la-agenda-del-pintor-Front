import axios from "axios";
import { ADD_JOB } from "../types/types";

import { ADD_ALL_DATES } from "../types/types";

const ENDPOINT = "http://192.168.0.175:3001/";

export const addJob = (job) => {
  const { name, startDate, endDate } = job;
  return async (dispatch) => {
    try {
      const response = await axios.post(`${ENDPOINT}job`, {
        name,
        startDate,
        endDate,
      });
      const { job } = response.data;

      return dispatch({ type: ADD_JOB, payload: job });
    } catch (error) {
      console.error("Error ", error.message);
      alert(error.message);
    }
  };
};
export const addAllDates = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(ENDPOINT); // Suponiendo que ya devuelves agendaItems y markedDates
      const {data} = response;

      dispatch({ type: ADD_ALL_DATES, payload: data });
    } catch (error) {
      console.error("Error ", error.message);
      alert("Error " + error.message);
    }
  };
};
/* 
export const addAllDates = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(ENDPOINT);
      const data = response.data;

      dispatch({ type: ADD_ALL_DATES, payload: data });
    } catch (error) {
      console.error("Error ", error.message);
      alert("Error " + error.message);
    }
  };
}; */
