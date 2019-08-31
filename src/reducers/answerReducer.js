import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_ANSWER':
                return {...state,..._.mapKeys(action.answers,'answerId')}; 
        case 'ANSWER_ADD_GOODCOUNT':
                return { ...state, [action.answerId]: action.payload}; 
        case 'RESET_ANSWER':
                return {};
        default:
            return state;
    }
}
