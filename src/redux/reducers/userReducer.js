import {firestore} from '../../services/Firebase';
import 'firebase/firestore';


const initState = {
        user: {email: 'email@email.com',
              userUID: 'userUID',
              name: 'name', 
              dorm: 'wholeSchool',
              addHomePop_done: true,
              darkPop_done: true}, 
        total: 0,
        masteredActions: {},
        favorites: {},
        points: {
          'waterBottle': 0,
          'cmontWalk': 0,
          'reuseStraw': 0,
          'reuseBag': 0,
          'frmersMarket': 0,
          "rebrewTea": 0,
          "noFoodWaste": 0,
          "meatlessMon": 0,
          "ecoClean": 0,
          "publicTransit": 0,
          "usedClothes": 0,
          "hangDry": 0,
          "climateClass": 0,
          "reuseBBQ": 0,
          "reuseBottle": 0,
          "shower5": 0,
          "donateClothes": 0,
          "layerCold": 0,
          "bulkGrocery": 0,
          "emailReceipt": 0,
      }
    }
  
  const userReducer = (state = initState, action) => {
    switch (action.type) {
      
      case 'USER_LOGIN':
          let firestoreState = action.payload.firestoreState;
          console.log('should be null', action.payload)
          return firestore.collection('users').doc(action.payload.email).onSnapshot( (snapshot) => {
                 let firestoreState = snapshot.data();
          console.log(action.payload, action.type, action.payload.firestoreState, 'in payload');
          console.log({...state, firestoreState})
          return {...state,
            me: 'tomato', 
            ...state.user,
            firestoreState};
          });
         
      case 'USER_LOGIN_NEW':
        console.log('user email', action.email)
        return state

      
      case 'INCREMENT':
        console.log('start', state);
          let name = action.payload.action.susAction;
          let actionPoints = action.payload.action.points;
          let newTotalPoint = action.payload.state.total += actionPoints;
          let newPoints = state.points += actionPoints;
          newPoints[name] = state.points[name] += actionPoints;
          let newState = { ...state,
                          ...firestoreState,
                            user: state.user,
                            total: newTotalPoint,
                            points: newPoints,
                        }
          return newState
     
       default:
        return state;
    }
};

  
export default userReducer;