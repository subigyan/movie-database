import ACTIONS from "../constants/actionTypes";

export const toggleLoading = (toggleState) => {
    return {
        type: ACTIONS.TOGGLE_LOADING,
        payload: toggleState,
    };
};

export const setSearch = (value) => {
    return {
        type: ACTIONS.SET_SEARCH,
        payload: value,
    };
};

export const setMovies = (movie) => {
    return {
        type: ACTIONS.SET_MOVIE,
        payload: movie,
    };
};
