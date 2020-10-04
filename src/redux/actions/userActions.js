export const addEmailToState = (email) => {
  return (dispatch, getState, {getFirestore}) => {
      dispatch({ type: 'ADD_USER_EMAIL_TO_STATE', payload: email });
    };
}