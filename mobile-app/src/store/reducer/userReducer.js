import {
    REGISTER_USER,
    SET_LOADING,
    SET_MSG
} from '../actiontype'

const initialState = {
    loading: false,
    newUser: {},
    msg: null
}

export function userReducer (state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_MSG:
            return {
                ...state,
                msg: action.payload
            }
    }

    return state
}