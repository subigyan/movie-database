import ACTIONS from "../constants/actionTypes";
const initialState = "";

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_SEARCH:
            return action.payload;

        default:
            return state;
    }
};
