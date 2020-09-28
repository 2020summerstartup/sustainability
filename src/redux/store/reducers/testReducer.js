const initState = {
    example: [
        {name: 'Jessica', age: '19', bio:'khbfvjb'},
        {name: 'Ash', age: '42', bio: 'kjnbdeojvb'}
    ]
}

const testReducer = (state = initState, action) => {
    if (action.type === 'ADD_NAME') {
        console.log(action)
     return {...state, new: 'jiii'}
    }
    else{
        return state
    }
}

export default testReducer;