import axios from "axios";
import { ADD_WORK } from "./types";

export const addWork = (work) => {
    return {
      type: ADD_WORK,
      payload: work,
    };
  };
