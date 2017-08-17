import axios from 'axios';

const initialState = {
    currentUser_status: false
}



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'STATUS': { 
            console.log('this state is now return',action.payload)
            return {
                ...state, currentUser_status: action.payload
            }
        }
           
        default: return state;    
    }
}

export function getStatus(status) {
    return {
        type: 'STATUS',
        payload: status
    }
}
