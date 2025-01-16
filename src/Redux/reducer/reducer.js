import { ADD_ALL_DATES, ADD_JOB } from "../types/types";

const initialState = {
  agendaItems: {}, // Para los items de la agenda
  markedDates: {}, // Para los marcadores
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB: {
      const { agendaItems, markedDates } = action.payload;

      return {
        ...state,
        agendaItems: {
          ...state.agendaItems,
          ...Object.keys(agendaItems).reduce((result, date) => {
            // Combinar los trabajos existentes con los nuevos
            result[date] = [
              ...(state.agendaItems[date] || []),
              ...agendaItems[date],
            ];
            return result;
          }, {}),
        },
        markedDates: {
          ...state.markedDates,
          ...Object.keys(markedDates).reduce((result, date) => {
            // Combinar los períodos existentes con los nuevos
            result[date] = {
              periods: [
                ...(state.markedDates[date]?.periods || []),
                ...markedDates[date].periods,
              ],
            };
            return result;
          }, {}),
        },
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
