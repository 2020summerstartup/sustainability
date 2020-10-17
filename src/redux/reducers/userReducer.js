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
        return firestore.collection('users').doc(action.payload).onSnapshot( (snapshot) => {
          let firestoreState = snapshot.data();
          console.log('redux done', snapshot.data());
          console.log('newSTate', firestoreState)
          return firestoreState;
        })

      
      case 'INCREMENT':
          console.log(state);
          let name = action.payload.susAction;
          let actionPoints = action.payload.points;
          let newTotalPoint = state.total += actionPoints;
          let newPoints = state.points;
          newPoints[name] = state.points[name] += actionPoints;
          let newState = { ...state,
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