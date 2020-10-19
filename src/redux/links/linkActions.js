import { ADD_LINK_REQUEST, ADD_LINK_FAILURE, ADD_LINK_SUCCESS,FETCH_LINKS_REQUEST, FETCH_LINKS_FAILURE, FETCH_LINKS_SUCCESS } from "./linkTypes"

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


export const addLinkRequest = () => {
    return {
        type: ADD_LINK_REQUEST
    }
}

export const addLinkFailure = error => {
    return {
        type: ADD_LINK_FAILURE,
        payload: error
    }
}

export const addLinkSuccess = links => {
    return {
        type: ADD_LINK_SUCCESS,
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

export const addLink = (obj) => {
    return (dispatch) => {
        dispatch(addLinkRequest)
        //axios.get('http://localhost:8000/link')
    fetch(`http://localhost:8000/link`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' }
    })
            .then(response =>response.json())
            .then(data => {
                const links = data.data
                console.log(links)
                dispatch(addLinkSuccess(links))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(addLinkFailure(errorMsg))
            })
    }
}