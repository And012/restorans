import React from 'react';
import { useField } from 'formik';

const FormikField = ({ component, name, mapMetaToProps, ...otherProps }) => {
    const [fieldProps, meta] = useField(name);
    const FieldComponent = component;

    const metaProps = mapMetaToProps?.(meta);
    const handleChange = (ev) => {
        fieldProps.onChange?.(ev);
        otherProps.onChange?.(ev);
    };

    return (
        <FieldComponent
            {...otherProps}
            {...fieldProps}
            {...metaProps}
            onChange={handleChange}
        />
    );
};

export default FormikField;
