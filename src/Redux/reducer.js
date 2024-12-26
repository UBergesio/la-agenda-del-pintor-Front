import { ADD_WORK } from "./types";

const initialState = {
    calendar: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORK:
            return {
                ...state,
                calendar: action.payload
            }
        default:
            return state;
    }
}