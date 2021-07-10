import {makeStyles} from "@material-ui/core";
import PatchStyles from "patch-styles";
import MapComponent from "../../components/map";
import RestaurantsList from "../../components/restaurants/reastaurants-list";

const useStyles = makeStyles((theme) => ({
    Container: {
        padding: theme.spacing(3),
        display: "flex",
    },
}));

export default function MainPage() {
    const classes = useStyles();

    return (
        <PatchStyles classNames={classes}>
            <div className="Container">
                <MapComponent />
                <RestaurantsList />
            </div>
        </PatchStyles>

    );
}