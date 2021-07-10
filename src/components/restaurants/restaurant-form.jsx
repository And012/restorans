import React from 'react';
import { Form, Formik } from "formik";
import {Button, DialogActions, DialogContent, makeStyles, TextField} from "@material-ui/core";
import FormikField from "../formik-field";
import * as Yup from "yup";
import PatchStyles from "patch-styles";

import {mapFormikMetaToMuiProps} from "../../utils/formik-utils";


const DEFAULT_VALUES = {
    name: '',
    description: '',
    latitude: 0,
    longitude: 0,
}

const useStyles = makeStyles((theme) => ({
    FormContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
}));

const RestaurantForm = ({ restaurant, handleSubmit, isCreating = false }) => {
    const classes = useStyles();

    if (restaurant) {
        [DEFAULT_VALUES.latitude, DEFAULT_VALUES.longitude] = restaurant.location;
        [DEFAULT_VALUES.name, DEFAULT_VALUES.description] = [restaurant.name, restaurant.description];
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().trim().required('The field is required'),
        description: Yup.string().trim().required('The field is required'),
        latitude: Yup.number().required('The field is required'),
        longitude: Yup.number().required('The field is required'),
    });

    return (
        <PatchStyles classNames={classes}>
            <Formik
                initialValues={DEFAULT_VALUES}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <DialogContent>
                        <div className="FormContainer">
                            <FormikField
                                component={TextField}
                                name="name"
                                label="Restaurant Name"
                                variant="outlined"
                                mapMetaToProps={mapFormikMetaToMuiProps}
                            />
                            <FormikField
                                component={TextField}
                                name="description"
                                label="Restaurant Description"
                                variant="outlined"
                                multiline
                                mapMetaToProps={mapFormikMetaToMuiProps}
                            />
                            <FormikField
                                component={TextField}
                                type="number"
                                name="latitude"
                                label="Location X"
                                variant="outlined"
                                mapMetaToProps={mapFormikMetaToMuiProps}
                            />
                            <FormikField
                                component={TextField}
                                type="number"
                                name="longitude"
                                label="Location Y"
                                variant="outlined"
                                mapMetaToProps={mapFormikMetaToMuiProps}
                            />
                        </div>
                    </DialogContent>

                    <DialogActions className="ActionsContainer">
                        <Button type="submit" variant="contained" color="primary">
                            {isCreating ? 'Create' : "Update"}
                        </Button>
                    </DialogActions>
                </Form>
            </Formik>
        </PatchStyles>
    )
}

export default RestaurantForm;
