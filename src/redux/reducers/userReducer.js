import points from "../../pages/AccountPage/AccountTabs/points";

const initState = {
        user: {email: 'email@email.com',
              name: 'name', 
              dorm: 'wholeSchool'}, 
        points: {
          'waterBottle': 0,
          'cmontWalk': 0,
          'reuseStraw': 0,
          'reuseBag': 0,
          'frmersMarket': 0,
      }
    }
  
  const userReducer = (state = initState, action) => {
    switch (action.type) {
      case 'ADD_USER_EMAIL_TO_STATE':
        console.log('email in state!');
        state.push(action.payload);
        return state;
      case 'INCREMENT':
          console.log('reducing...', state)
          let name = action.payload.susAction;
          let actionPoints = action.payload.points;
          let newPoints = state.points[name] += actionPoints
          // let newState = {...state, ...state.user, ...state.points, newPoints }
          // state = newState;
          // actionIncremented.info = action.payload;
          // let actionPoints = {...state}.points;
          // let actionName = actionPoints.actionIncremented;
          // let newPoints = actionPoints.actionName += action.payload.points
          // actionPoints = {...actionPoints, newPoints}
          console.log(newPoints, action.payload.susAction);
          return state
      default:
        return state;
    }
  };

  const incrementReducer = (state = initState, action) => {
    switch (action.type){
        case 'INCREMENT':
            console.log('reducing...', state)
            let actionIncremented = {...state}.increment;
            actionIncremented.info = action.payload;
            let actionPoints = {...state}.points;
            let actionName = actionPoints.actionIncremented;
            let newPoints = actionPoints.actionName += action.payload.points
            actionPoints = {...actionPoints, newPoints}
            console.log(action.payload.susAction, actionPoints);
            return state
        default:
            return state
}
}
  
  export default userReducer;