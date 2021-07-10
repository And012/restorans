import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {IconButton, makeStyles, Typography} from "@material-ui/core";
import PatchStyles from "patch-styles";

import {actions, asyncActions} from "../../store/slices";
import RateStar from "../rate-star";
import Comments from "../comments";
import arithmeticAverage from "../../utils/arithmetic-average";

const useStyles = makeStyles((theme) => ({
    Container: {
        padding: theme.spacing(3),
    },
    Rate: {
        display: 'flex',
        justifyContent: 'center',
    },
    Title: {
        display: 'flex',
        padding: theme.spacing(3),
    },
    Action: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    Spacer: {
        flex: 1,
    },
}));

const RestaurantView = ({ setEditable, restaurant }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [estimated, setEstimated] = useState(false);

    const handleEditClick = () => {
        setEditable(true);
    }
    const handleRemoveClick = () => {
        dispatch(asyncActions.restaurants.delete(restaurant.uid));
        history.push('/');
    }

    const handleChange = (event, newValue) => {
        const updatedRestaurant = {
            ...restaurant,
            rate: [...restaurant.rate, newValue]
        };
        dispatch(asyncActions.restaurants.update(updatedRestaurant));
        dispatch(actions.restaurants.setSelected(updatedRestaurant));
        setEstimated(true);
    }

    return (
        <PatchStyles classNames={classes}>
            <div className="Container">
                <div className="Rate">
                    <RateStar
                        value={arithmeticAverage(restaurant)}
                        onChange={handleChange}
                        readOnly={estimated}
                    />
                </div>
                <div className="Title">
                    <Typography variant="h2">
                        {restaurant.name}
                    </Typography>
                    <div className="Spacer" />
                    <IconButton onClick={handleRemoveClick}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={handleEditClick}>
                        <EditIcon className="Action" />
                    </IconButton>
                </div>
                <Typography variant="h5">{restaurant.description}</Typography>
                <Comments comments={restaurant.comments} restaurant={restaurant}/>
            </div>
        </PatchStyles>
    )
}

export default RestaurantView;
