import React from 'react';
import {Rating} from "@material-ui/lab";

const RateStar = ({ readOnly = false, onChange, value }) => {
    return (
            <Rating
                size="large"
                value={value}
                onChange={onChange}
                readOnly={readOnly}
            />
    )
};

export default RateStar;