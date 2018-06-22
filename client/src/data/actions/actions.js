import * as actiontypes from "./action-types"


export const test = (test) => {
    return {
        type: actiontypes.TEST_TYPE,
        payload: test
    }
}