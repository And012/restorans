import React from 'react';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Placemark} from "react-yandex-maps";

import {actions, selectors} from "../../store/slices";

export default function PlacemarkList() {
    const dispatch = useDispatch()
    const restaurants = useSelector(selectors.restaurants.selectAll);
    const history = useHistory()

    const handlePlaceMarkClick = (restaurant) => {
        dispatch(actions.restaurants.setSelected(restaurant));
        history.push('/info');
    }

    return (
        <>
            {restaurants.map((restaurant) => {
                const { location, name, uid } = restaurant;
                return (
                    <Placemark
                        key={uid}
                        geometry={location}
                        properties={{ iconCaption: name }}
                        onClick={() => handlePlaceMarkClick(restaurant)}
                    />
                );
            })}
        </>
    )
}
