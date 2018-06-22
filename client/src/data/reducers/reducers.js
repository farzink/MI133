import * as actiontypes from "../actions/action-types"


export const deafultReducer = (state= {}, action) => {
    switch (action.type) {
        case actiontypes.TEST_TYPE:
            return Object.assign({}, state, {
                id: action.payload.id,
                name: action.payload.name
            })
        default:
            return state;
    }
}