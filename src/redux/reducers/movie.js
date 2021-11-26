import ACTIONS from "../constants/actionTypes";

const initialState = [];

export const moviesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS.SET_MOVIE:
            return payload;

        default:
            return state;
    }
};
