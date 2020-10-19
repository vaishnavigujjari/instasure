import {FETCH_EVENTS_REQUEST, FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS } from "./eventTypes"

const initialState = {
    loading: true,
    events: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EVENTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EVENTS_SUCCESS:
            return {
                loading: false,
                events: action.payload,
                error: ''
            }
        case FETCH_EVENTS_FAILURE:
            return {
                loading: false,
                events: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer;