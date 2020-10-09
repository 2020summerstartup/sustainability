import store from '../../../src/index';

//const initState = store.getState().userInfo
const initState = {action: 'test'}

const incrementReducer = (state = initState, {action}) => {
    if (action.type = "INCREMENT") {
        console.log( state );
        const newState = {
            ...state, 
            ...state.userInfo, 
            action}
    }
}

export default incrementReducer;