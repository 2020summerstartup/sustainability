const initState = {
    user: [
        {email: 'email@email.com', name: 'name', dorm: 'wholeSchool',
        }
    ]
  }
  
  const userReducer = (state = initState, action) => {
    switch (action.type) {
      case 'ADD_USER_EMAIL_TO_STATE':
        console.log('email in state!');
        state.push(action.payload);
        return state;
      default:
        return state;
    }
  };
  
  export default userReducer;