import React from 'react';
import PatchStyles from "patch-styles";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import { makeStyles, Typography } from "@material-ui/core";

import RestaurantForm from "../../components/restaurants/restaurant-form";
import {asyncActions} from "../../store/slices";

const useStyles = makeStyles((theme) => ({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    Title: {
        display: 'flex',
        justifyContent: "center",
    },
}));

const AdminPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = ({latitude, longitude, name, description}) => {
        dispatch(asyncActions.restaurants.create({
            location: [latitude, longitude],
            name,
            description,
            rate: [5],
            comments: [],
        }));
        history.push('/');
    }

    return (
        <PatchStyles classNames={classes}>
            <div className="Container">
                <div className="Title">
                    <Typography variant="h2">
                        Create a restaurant
                    </Typography>
                </div>
                <RestaurantForm handleSubmit={handleSubmit} isCreating />
            </div>
        </PatchStyles>
    )
}

export default AdminPage;
