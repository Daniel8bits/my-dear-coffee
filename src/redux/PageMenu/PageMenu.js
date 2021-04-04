
/* =========== Constants ============ */

const DEFAULT_VALUE = {
    page: 0
}


/* =========== Actions ============ */

/**
 * Types of actions
 */
const types = {
    MENU_UPDATE: "MENU_UPDATE",
}

export const PageMenuActions = {
    setPage: (page) => {
        return {
            type: types.MENU_UPDATE,
            payload: page
        }
    }
}

/* =========== Reducers ============ */

/**
 * Initial state of the store
 */
const INITIAL_STATE = {...DEFAULT_VALUE}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.MENU_UPDATE: return {
            ...state,
            page: action.payload
        }
        default: return state
    }
}

export default reducer