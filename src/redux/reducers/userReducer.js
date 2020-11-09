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
        impact: {
          buzzes: 0,
          coEmiss: 0,
          energy: 0,
          water: 0,
        },
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
    // allows me to use 'case' isntead of a bunch of if and else if statements 
    switch (action.type) {

         
      case 'USER_LOGIN':
        // when user logs in, the redux state will become the user's firestore state document
        // action.payload is a snapshot of the user's firestore document (ie. object containing all of user's info)
        return action.payload


      case 'INCREMENT':
        // when user clicks to increment an action
        // to increment action point field & total point field
        let name = action.payload.action.susAction;   // action name
        let actionPoint = action.payload.action.points;   // action's associated point value
        let pointArray = action.payload.state.user.points;    // user's array of all actions w/ assocaited points
        pointArray[name] = pointArray[name] += actionPoint;   // add points to the specified action within the array
        let newTot = action.payload.state.user.total += actionPoint;   // add points to user's total point count
        // to update user's impact track
        let impactObject = action.payload.state.user.impact;
        var newImpact = {};
        for (var key in impactObject){    // loop through all the properties of school impact array
          if (key != 'buzzes'){
            // for anything but 'buzzes' field, need to add amount specific to the action
            var newImpactObj = impactObject[key];
            var addImpact = action.payload.action[key];
            newImpactObj += addImpact;
            newImpact[key] = newImpactObj;
          } else {
            // each action logges will an count as one buzz
            newImpact[key] = impactObject[key] + 1;
          }
        }
        let newActionState = {...state,   //spread the state object
                              ...state.user,    // spread the user object
                              impact: newImpact, // update the impact array 
                              total: newTot,    // update the total point count
                              points: pointArray    // update the action point array 
                            }
        console.log('after all updates', newActionState)
        return newActionState;    // update redux store with this new state

      
      case 'SCHOOL_IMPACT':
        // called upon increment to update the school's action impact track
          var newSchoolImpact = {};   // init new array to work with
          for (var key in state.school){    // loop through all the properties of school impact array
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
          let newSchoolState = {
            ...state,   // spread the state
            school: newSchoolImpact   // update the school's impact array with up-to-date array 
          }
          return newSchoolState;  //update redux store with this new state
      
      case 'CHANGE_DORM':
        // called when user changes dorm in settings page
        let newDorm = action.payload;   //dorm that user wants to change to
        let newDormState = {...state,   // spread the state
                        ...state.user,    // spread the user object
                        dorm: newDorm     // update dorm field of user's object
                      };
        return newDormState   //update redux store with this new state


      case 'CHANGE_FAV':
        // called when user favorites or unfavorites an action
        let actionName = action.payload.action.susAction;     // name of action they want to toggle
        let favState = action.payload.state.user.favorites;     // object containing user's favorited actions
        let type = action.payload.type;     // describes toggle (either add or delete)
        if (type === 'add') {
          // if user wants to add action to their favorites
          favState.push(actionName);    // add favorite to favorites array
        } else  {
          // if user wants to delete action from their favorites 
          const index = favState.indexOf(actionName);
          favState.splice(index, 1)
        } 
        let newFavState = {...state,  // spread the state
                        ...state.user,    // spread the user object
                        favorites: favState   // update the favorites field of the user's object
                      };
        return newFavState;   // update redux with the new state



      case 'ADD_BADGE':
        // called if user masters an action --> adds action to list of mastered & adds to badge
        let userMastered = action.payload.state.user.masteredActions;   // array of mastered actions
        userMastered.push(action.payload.actionName);   // add the action that just got mastered to the array
        let newMasteredState = {...state, ...state.user, masteredActions: userMastered}   // update the state
        return newMasteredState;    // update redux with the new state 

      // this is needed to not throw an error, I think something about how store is initialized 
      default:
        return state;
      
    }
};

  
export default userReducer;