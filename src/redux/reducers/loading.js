import ACTIONS from "../constants/actionTypes";
const initialState = true;

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_LOADING:
            return action.payload;

        default:
            return state;
    }
};
