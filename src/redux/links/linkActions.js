import { FETCH_LINKS_REQUEST, FETCH_LINKS_FAILURE, FETCH_LINKS_SUCCESS } from "./linkTypes"

import axios from 'axios';

export const fetchLinksRequest = () => {
    return {
        type: FETCH_LINKS_REQUEST
    }
}

export const fetchLinksFailure = error => {
    return {
        type: FETCH_LINKS_FAILURE,
        payload: error
    }
}

export const fetchLinksSuccess = links => {
    return {
        type: FETCH_LINKS_SUCCESS,
        payload: links
    }
}


export const fetchLinks = () => {
    return (dispatch) => {
        dispatch(fetchLinksRequest)
        axios.get('http://localhost:8000/link')
            .then(response => {
                const links = response.data.data
                console.log(links)
                dispatch(fetchLinksSuccess(links))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchLinksFailure(errorMsg))
            })
    }
}