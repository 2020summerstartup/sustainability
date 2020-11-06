import {firestore} from '../../services/Firebase';
import 'firebase/firestore';


const initState = {
        school: {
          buzzes: 0,
          water: 0,
          coEmiss: 0,
          energy: 0,
        },
        user: {email: 'email@email.com',
              userUID: 'userUID',
              name: 'name', 
              dorm: 'wholeSchool',
              addHomePop_done: true,
              darkPop_done: true}, 
        total: 0,
        masteredActions: [],
        favorites: [],
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
        console.log('user firestore', action.payload)
        return action.payload


      // FIRST THING NEXT WEEK: FIX THIS FUNCTION
      case 'INCREMENT':
        let name = action.payload.action.susAction;
        let actionPoint = action.payload.action.points;
        let pointArray = action.payload.state.user.points;
        pointArray[name] = pointArray[name] += actionPoint;
        let newTot = action.payload.state.user.total += actionPoint;   
        let newActionState = {...state, 
                              ...state.user, 
                              total: newTot, 
                              points: pointArray
                            }
        return newActionState;

      
      case 'SCHOOL_IMPACT':
          var newSchoolImpact = {};
          // console.log(state.school, state.school.buzzes)
          for (var key in state.school){
            if (key != 'buzzes'){
              // for anything but 'buzzes' field, need to add amount specific to the action
              var newSchoolObj = state.school[key];
              var addData = action.payload.action[key];
              newSchoolObj += addData;
              newSchoolImpact[key] = newSchoolObj;
            } else {
              // each action logges will an count as one buzz
              newSchoolImpact[key] = state.school[key] + 1;
            }
          }
          let newState = {
            ...state,
            school: newSchoolImpact
          }
          // console.log(newState)
          return newState;
      
      case 'CHANGE_DORM':
        let newDorm = action.payload;
        let newDormState = {...state,
                        ...state.user,
                        dorm: newDorm
                      };
        console.log(action.payload, newDormState);
        return newDormState


      case 'CHANGE_FAV':
        let actionName = action.payload.action.susAction;
        let favState = action.payload.state.user.favorites;
        let type = action.payload.type;
        if (type === 'add') {
          favState.push(actionName);
          let newFavState = {...state, ...state.user, favorites: favState}
          console.log(action.payload.state.user.favorites, action.payload.action.susAction, newFavState)
          return newFavState
        } else  {
          const index = favState.indexOf(actionName);
          favState.splice(index, 1)
          let newFavState = {...state, ...state.user, favorites: favState}
          console.log(action.payload.state.user.favorites, action.payload.action.susAction, newFavState)
          return newFavState
        } 


      case 'ADD_BADGE':
        let userMastered = action.payload.state.user.masteredActions;
        userMastered.push(action.payload.actionName);
        let newMasteredState = {...state, ...state.user, masteredActions: userMastered}
        console.log(action.payload, newMasteredState);
        return newMasteredState;  

      default:
        return state;
      
    }
};

  
export default userReducer;