import { ADD_ALL_DATES, ADD_JOB } from "../types/types";

const initialState = {
  agendaItems: {},  // Para los items de la agenda
  markedDates: {},   // Para los marcadores
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      /* case ADD_JOB:
        const { startDate, name, endDate } = action.payload;
        const existingJobs = state.jobs[startDate] || [];
        return {
          ...state,
          jobs: {
            ...state.jobs,
            [startDate]: [...existingJobs, { name, endDate }], // Agrega el nuevo trabajo
          },
        }; */

    /* case ADD_ALL_DATES:
      return {
        ...state,
        jobs: { ...state.jobs, ...action.payload }, // Agrega las fechas que tiene el server
      }; */
      case ADD_ALL_DATES:
      return {
        ...state,
        agendaItems: action.payload.agendaItems, // Actualiza agendaItems
        markedDates: action.payload.markedDates,   // Si es necesario
      };
    default:
      return state;
  }
};

export default rootReducer;
