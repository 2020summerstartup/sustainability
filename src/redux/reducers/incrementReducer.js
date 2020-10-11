// import store from '../../../src';

// const initState = store.getState().userInfo
const initState = {
    points: {
        'waterBottle': 0,
        'cmontWalk': 0,
        'reuseStraw': 0,
        'reuseBag': 0,
        'frmersMarket': 0,
    },
    increment: [
        {action: 'action', number: '#'}
    ]
  }

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

export default incrementReducer;

