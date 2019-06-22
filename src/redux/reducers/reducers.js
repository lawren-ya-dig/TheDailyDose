import {combineReducers} from 'redux'

const user = (state= {}, action) => {
    switch(action.type){
        case "set_user":
            return action.payload;
        default:
            return state;
    }
}

const blog = (state= {}, action) => {
    switch(action.type){
        case "set_blog":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({user, blog});