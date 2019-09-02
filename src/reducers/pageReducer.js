
export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {...state,currentPageNumber:action.payload};
        default:
            return state;
    }
}