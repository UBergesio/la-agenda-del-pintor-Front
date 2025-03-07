import { ADD_ALL_DATES, ADD_JOB, UPDATE_JOB } from "../types/types";

const initialState = {
  agendaItems: {}, // Para los items de la agenda
  markedDates: {}, // Para los marcadores
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_JOB: {
      return {
        ...state,
        agendaItems: action.payload.agendaItems, // Actualiza agendaItems
        markedDates: action.payload.markedDates, // Si es necesario
      };
    }

      case ADD_JOB: {
  /*       const { agendaItems, markedDates } = action.payload;
      
        return {
          ...state,
          agendaItems: {
            ...state.agendaItems,
            ...Object.keys(agendaItems).reduce((result, date) => {
              result[date] = [
                ...(state.agendaItems[date] || []),
                ...agendaItems[date].map((job) => ({
                  ...job,
                  id: job.id, // Asegurar que el id se pase correctamente
                })),
              ];
              return result;
            }, {}),
          },
          markedDates: {
            ...state.markedDates,
            ...Object.keys(markedDates).reduce((result, date) => {
              result[date] = {
                periods: [
                  ...(state.markedDates[date]?.periods || []),
                  ...markedDates[date].periods,
                ],
              };
              return result;
            }, {}),
          },
        }; */
        return {
          ...state,
          agendaItems: action.payload.agendaItems, // Actualiza agendaItems
          markedDates: action.payload.markedDates, // Si es necesario
        };
      }
    case ADD_ALL_DATES:
      return {
        ...state,
        agendaItems: action.payload.agendaItems, // Actualiza agendaItems
        markedDates: action.payload.markedDates, // Si es necesario
      };
    default:
      return state;
  }
};

export default rootReducer;
