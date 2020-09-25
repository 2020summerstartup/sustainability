export const example = (data) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type: 'ADD_DATA',
            data,
        })
    }
}