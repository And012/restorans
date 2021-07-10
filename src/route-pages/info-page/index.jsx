import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router";

import {actions, asyncActions, selectors} from "../../store/slices";
import RestaurantForm from "../../components/restaurants/restaurant-form";
import RestaurantView from "../../components/restaurants/restaurant-view";

export default function InfoPage() {
    const restaurant = useSelector(selectors.restaurants.selected);
    const [editable, setEditable] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const updatedRestaurant = {
            ...restaurant,
            name: values.name,
            description: values.description,
            location: [values.latitude, values.longitude],
        }
        if(restaurant) {
            dispatch(asyncActions.restaurants.update(updatedRestaurant));
            dispatch(actions.restaurants.setSelected(updatedRestaurant));
            setEditable(false);
        }
    }

    if (!restaurant) {
        return <Redirect to="/" />
    }

    return editable ?
        <RestaurantForm
            restaurant={restaurant}
            setEditable={setEditable}
            handleSubmit={handleSubmit}
        /> :
        <RestaurantView restaurant={restaurant} setEditable={setEditable} />
};
