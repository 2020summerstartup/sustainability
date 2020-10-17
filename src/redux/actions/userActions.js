export const userLoginToState = (email) => {
  return (dispatch) => {
      dispatch({ type: 'USER_LOGIN', payload: email });
    };
}

export const incrementAction = (action) => {
  return { type: 'INCREMENT', payload: action}
}
  

