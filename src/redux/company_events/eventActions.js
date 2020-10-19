import {FETCH_EVENTS_REQUEST, FETCH_EVENTS_FAILURE, FETCH_EVENTS_SUCCESS } from "./eventTypes"

import axios from 'axios';

export const fetchEventsRequest = () => {
    return {
        type: FETCH_EVENTS_REQUEST
    }
}

export const fetchEventsFailure = error => {
    return {
        type: FETCH_EVENTS_FAILURE,
        payload: error
    }
}

export const fetchEventsSuccess = events => {
    return {
        type: FETCH_EVENTS_SUCCESS,
        payload: events
    }
}




export const fetchEvents = () => {
    return (dispatch) => {
        dispatch(fetchEventsRequest)
        axios.get('http://localhost:8080/companyEvents')
            .then(response => {
                const events = response.data.data
                console.log(events)
                dispatch(fetchEventsSuccess(events))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchEventsFailure(errorMsg))
            })
    }
}
