export const addName = () => {
    return ( dispatch, getState, {getFirebase, getFirestore}) => {

        dispatch({ type: 'ADD_NAME'});
    }
}