// import axios from 'axios';

// const initialState = {
//     searchResult: {}
// }

// const GET_CUSTOMER = "GET_CUSTOMER";

// export function getCustomerDetails(id) {
//     return {
//         type: GET_CUSTOMER,
//         payload: axios.get('/api/customer')
//         .then(payload => payload)
//         .catch(console.log('sorry, something went wrong'))
//     }
// }


// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case GET_CUSTOMER + '_FULFILLED':
//             if (state.searchResult.indexOf(action.payload) === id) {
//                 return {
//                     searchResult: action.payload
//                 }
//             }
//             default: return state;    
//     }
// }