import axios from 'axios';

const initialState = {
    currentUser: {}
}

const GET_USER = "GET_USER";

export function getUser(id) {
    return {
        type: GET_USER,
        payload: axios.get('/api/user')
        .then(payload => payload)
        .catch(console.log('sorry, something went wrong'))
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            if (state.currentUser.indexOf(action.payload) === id) {
                return {
                    currentUser: action.payload
                }
            }
            default: return state;    
    }
}