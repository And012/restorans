import React from 'react';
import {useDispatch} from "react-redux";
import {Button, makeStyles, TextField, Typography} from "@material-ui/core";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import PatchStyles from "patch-styles";

import FormikField from "../formik-field";
import {mapFormikMetaToMuiProps} from "../../utils/formik-utils";
import {actions, asyncActions} from "../../store/slices";
import generateUid from "../../utils/generate-uid";

const useStyles = makeStyles((theme) => ({
    Container: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(3),
        borderTop: '1px dashed black',
    },
    AddComment: {
        display: 'flex',
        gap: theme.spacing(3),
        alignItems: 'flex-start',
    },
    List: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
}));

const DEFAULT_VALUES = {
    comment: '',
};

const Comments = ({comments, restaurant}) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        comment: Yup.string().trim().required('The field is required'),
    });

    const handleAddComment = (values, action) => {
        const updatedRestaurant = {
            ...restaurant,
            comments: [...restaurant.comments, {value: values.comment, uid: generateUid()}],
        };
        dispatch(asyncActions.restaurants.update(updatedRestaurant));
        dispatch(actions.restaurants.setSelected(updatedRestaurant));
        action.resetForm();
    }
    return (
        <PatchStyles classNames={classes}>
            <div className="Container">
                <Typography variant="h3">Comments</Typography>
                <Formik
                    initialValues={DEFAULT_VALUES}
                    validationSchema={validationSchema}
                    onSubmit={handleAddComment}
                >
                    <Form className="AddComment">
                        <FormikField
                            component={TextField}
                            name="comment"
                            label="Leave a comment"
                            variant="outlined"
                            mapMetaToProps={mapFormikMetaToMuiProps}
                        />

                        <Button type="submit" variant="contained" color="primary">
                            Add comment
                        </Button>
                    </Form>
                </Formik>
                <div className="List">
                    {
                        comments.map(({value, uid}) => {
                            return (
                                <Typography key={uid} variant='h5'>{value}</Typography>
                            );
                        })
                    }
                </div>
            </div>
        </PatchStyles>

    )
}

export default Comments;

