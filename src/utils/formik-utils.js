export const mapFormikMetaToMuiProps = (meta) => (
    meta.touched ? { error: !!meta.error, helperText: meta.error } : null
);
