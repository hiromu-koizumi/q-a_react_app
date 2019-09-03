export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_RESPONSES':
                return {...state,[action.answerId]:action.payload}; 
        default:
            return state;
    }
}