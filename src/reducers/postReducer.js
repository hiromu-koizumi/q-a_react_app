import _ from 'lodash';




//レデューサー
export default (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            return {...state,..._.mapKeys(action.questions,'postId')};
        case 'FETCH_QUESTION':
            return { ...state, [action.payload.id]: action.payload };
        case 'ADD_GOODCOUNT':
            return { ...state, [action.postId]: action.payload};
        default:
            return state;
    }
}

