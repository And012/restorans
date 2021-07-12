import { createAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import arithmeticAverage from "../../utils/arithmetic-average";

const restaurantsAdapter = createEntityAdapter({
    selectId: (restaurant) => restaurant.uid,
    sortComparer: (firstComparer, secondComparer) => arithmeticAverage(secondComparer) - arithmeticAverage(firstComparer),
});

const initialState = restaurantsAdapter.getInitialState({
    isLoading: false,
    selected: null,
});

const adapterSelectors = restaurantsAdapter.getSelectors((state) => state.restaurants);

const asyncActions = {
    fetchAll: createAction('restaurants/async/fetch'),
    create: createAction('restaurants/async/create'),
    delete: createAction('restaurants/async/delete'),
    update: createAction('restaurants/async/update'),
};

const slice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        setAll: (state, action) => {
            restaurantsAdapter.setAll(state, action.payload);
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        add: (state, action) => {
            restaurantsAdapter.addOne(state, action.payload);
        },
        update: (state, action) => {
            restaurantsAdapter.upsertOne(state, action.payload);
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
        },
        delete: (state, action) => {
            restaurantsAdapter.removeOne(state, action.payload);
        },
    },
});

const restaurantsSlice = {
    asyncActions,
    ...slice,
    selectors: {
        selected: (state) => state.restaurants.selected,
        isLoading: (state) => state.restaurants.isLoading,
        ...adapterSelectors,
    },
};

export default restaurantsSlice;
