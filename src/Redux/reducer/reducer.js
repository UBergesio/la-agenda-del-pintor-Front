import { ADD_DATE, ADD_ITEMS } from "../types/types";


const initialState = {
  dates: [],
};
console.log("reduce global este " + initialState.dates);

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATE:
      return {
        ...state,
        dates: [...state.dates, action.payload], // Agrega una nueva fecha
      };
    default:
      return state;
  }
};

export default rootReducer;
