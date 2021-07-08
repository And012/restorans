import { createAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const restaurantsAdapter = createEntityAdapter({
    selectId: (restaurant) => restaurant.uid,
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
