import store from '../../../src';

const initState = store.getState().userInfo
// const initState = {
//     increment: [
//         {action: 'action', number: '#'}
//     ]
//   }

const incrementReducer = (state = initState, action) => {
    switch (action.type){
        case 'INCREMENT':
            console.log('reducing...')
            // state.push(action.payload);
            return action.payload
        default:
            return state
}
}

export default incrementReducer;

