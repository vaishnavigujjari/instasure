import { FETCH_LINKS_REQUEST, FETCH_LINKS_FAILURE, FETCH_LINKS_SUCCESS } from "./linkTypes"

const initialState = {
    loading: true,
    links: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LINKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_LINKS_SUCCESS:
            return {
                loading: false,
                links: action.payload,
                error: ''
            }
        case FETCH_LINKS_FAILURE:
            return {
                loading: false,
                links: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer;