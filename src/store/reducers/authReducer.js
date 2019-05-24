const defaultState = {
    user: {},
    token: null,
    error: null,
    profile: null
}

const auth = (state = defaultState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                token: action.payload.token
            }
        case 'SHOW_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'AFTER_LOGIN':
            return {
                ...state,
                user: action.payload,
                profile: action.payload.Profile
            }
        default:
            return state
    }
}

export default auth;