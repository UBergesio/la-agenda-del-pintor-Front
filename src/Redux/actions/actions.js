import axios from "axios";
import { ADD_DATE } from "../types/types";
import { ADD_ITEMS } from "../types/types";

export const addDate = (date) => ({
  type: ADD_DATE,
  payload: date,
});
