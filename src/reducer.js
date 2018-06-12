import math from 'mathjs';

const initalState = {
    count: ''
}

const reducer = (state=initalState, action) => {
    switch (action.type){
        case 'ON_PRESS':
            return {
                count: state.count.concat(action.payload)
            } 
        case 'ON_CLEAR':
            return {
                count: ''
            }
        case 'ON_SUBMIT' :
            let sum = math.eval(state.count)
            return {
                count: sum
            }
        default :
            return state
    }
}

export default reducer;