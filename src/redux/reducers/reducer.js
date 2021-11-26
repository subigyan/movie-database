import { searchReducer } from "./search";
import { loadingReducer } from "./loading";
import { moviesReducer } from "./movie";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    search: searchReducer,
    loading: loadingReducer,
    movies: moviesReducer,
});

export default rootReducer;
