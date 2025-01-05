import {
  ADD_DATE,
  ADD_ITEMS,
  ADD_NAME_EVENT,
  ADD_ALL_DATES,
} from "../types/types";

const initialState = {
  dates: [],
  nameEvents: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATE:
      return {
        ...state,
        dates: [...state.dates, action.payload], // Agrega una nueva fecha
      };
    case ADD_NAME_EVENT:
      return {
        ...state,
        nameEvents: [...state.nameEvents, action.payload], // Agrega un nuevo nombre de evento
      };

    case ADD_ALL_DATES:
      return {
        ...state,
        dates: [...state.dates, action.payload], // Agrega una las fechas que tiene el server
      };

    default:
      return state;
  }
};

export default rootReducer;
