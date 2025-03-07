import axios from "axios";
// Types
import { ADD_JOB } from "../types/types";
import { ADD_ALL_DATES } from "../types/types";
import { UPDATE_JOB } from "../types/types";


const ENDPOINT = "http://192.168.0.175:3001/";

export const updateJob = (jobId, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${ENDPOINT}job/${jobId}`, updatedData);
      const {data} = response
      dispatch({ type: UPDATE_JOB, payload: data });
    } catch (error) {
      console.error(" ESTE ERROR Error al actualizar el trabajo:", error);
      alert(error.message);
    }
  };
};

export const addJob = (job) => {
  const { name, startDate, endDate } = job;
  return async (dispatch) => {
    try {
      const response = await axios.post(`${ENDPOINT}job`, {
        name,
        startDate,
        endDate,
      });
      const { data } = response;
      return dispatch({ type: ADD_JOB, payload: data });
    } catch (error) {
      console.error("Error esta aca 2  ", error.message);
      alert(error.message);
    }
  };
};
export const addAllDates = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(ENDPOINT);
      const { data } = response;

      dispatch({ type: ADD_ALL_DATES, payload: data });
    } catch (error) {
      console.error("Error esta aca", error.message);
      alert("Error esta aca " + error.message);
    }
  };
};
