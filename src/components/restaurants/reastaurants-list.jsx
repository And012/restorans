import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card, makeStyles, Typography } from "@material-ui/core";
import {useHistory} from "react-router";

import {actions, selectors} from "../../store/slices";
import PatchStyles from "patch-styles";
import RateStar from "../rate-star";
import arithmeticAverage from "../../utils/arithmetic-average";

const useStyles = makeStyles((theme) => ({
    Container: {
        padding: theme.spacing(3),
        display: 'flex',
        gap: theme.spacing(1),
        flexDirection: 'column',
        overflow: 'scroll',
        height: 'calc(100vh - 48px)',
        width: '50%',
        cursor: 'pointer',
    },
    Item: {
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
}));

const RestaurantsList = () => {
    const restaurants = useSelector(selectors.restaurants.selectAll);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleItemClick = (restaurant) => {
        dispatch(actions.restaurants.setSelected(restaurant));
        history.push('/info');
    }

    return (
        <PatchStyles classNames={classes}>
            <Card className="Container">
                {
                    restaurants?.map((restaurant) => {
                        const { name, uid } = restaurant;
                        return (
                            <div
                                key={uid}
                                className="Item"
                                onClick={() => handleItemClick(restaurant)}
                            >
                                <Typography variant="h2">{name}</Typography>
                                <RateStar readOnly value={arithmeticAverage(restaurant)}/>
                            </div>
                        )
                    })
                }
            </Card>
        </PatchStyles>

    )
}

export default RestaurantsList;
