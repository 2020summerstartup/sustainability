import store from "../..";

export const userLoginToState = (email) => {
  return (dispatch) => {
      store.firestore.get({ collection: 'users', doc: email})
      console.log(store);
      dispatch({ type: 'USER_LOGIN', payload: email });
    };
}

export const incrementAction = (action) => {
  return { type: 'INCREMENT', payload: action}
}
  

