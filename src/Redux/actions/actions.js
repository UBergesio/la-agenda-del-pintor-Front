import axios from "axios";
import { ADD_DATE } from "../types/types";



import { ADD_ALL_DATES } from "../types/types";

const ENDPOINT = "http://localhost:3001/";

export const addDate = (date) => ({
  type: ADD_DATE,
  payload: date,
});


export const addAllDates = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://192.168.0.175:3001/");
      if (!response.ok) {
        throw new Error(`Error en la red: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Datos obtenidos:", data);
      dispatch({ type: ADD_ALL_DATES, payload: data }); // Envía el objeto de fechas al reducer
    } catch (error) {
      console.error("Error al obtener las fechas:", error.message);
      alert("Error al obtener las fechas: " + error.message);
    }
  };
};
