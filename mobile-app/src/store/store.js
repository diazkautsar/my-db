import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import {
    userReducer
} from './reducer/userReducer'

export default createStore(
    combineReducers({
        userReducer
    }),
    applyMiddleware(
        thunk
    )
)