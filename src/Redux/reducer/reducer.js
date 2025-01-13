import { ADD_ALL_DATES, ADD_JOB } from "../types/types";

const initialState = {
  jobs: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_JOB:
        const { initialDate, name } = action.payload;
        const existingJobs = state.jobs[initialDate] || [];
        return {
          ...state,
          jobs: {
            ...state.jobs,
            [initialDate]: [...existingJobs, { name }], // Agrega el nuevo trabajo
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
