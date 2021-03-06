const generateUid = (length = 16) => {
    let result = '';

    while (result.length < length) {
        result += Math.random().toString(36).slice(2);
    }

    return result.slice(0, length);
};

export default generateUid;
