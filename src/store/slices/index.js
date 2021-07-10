import { combineReducers } from "redux";

import restaurantsSlice from "./restaurants.slice";

const rootReducer = combineReducers({
    restaurants: restaurantsSlice.reducer,
});

export default rootReducer;

export const actions = {
    restaurants: restaurantsSlice.actions,
}

export const asyncActions = {
restaurants: restaurantsSlice.asyncActions,
}

export const selectors = {
    restaurants: restaurantsSlice.selectors,
};
