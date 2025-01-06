import { ADD_ALL_DATES, ADD_JOB } from "../types/types";

const initialState = {
  jobs: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      const { name, date } = action.payload;

      // Si ya existe la fecha, se agrega el nuevo trabajo al array correspondiente
      const existingJobs = state.jobs[date] || [];
      return {
        ...state,
        jobs: {
          ...state.jobs,
          [date]: [...existingJobs, { name }], //Agrega el nuevo trabajo
        },
      };

    case ADD_ALL_DATES:
      return {
        ...state,
        jobs: { ...state.jobs, ...action.payload }, // Agrega una las fechas que tiene el server
      };
    default:
      return state;
  }
};

export default rootReducer;
