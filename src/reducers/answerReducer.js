import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_ANSWER':
                return {...state,..._.mapKeys(action.answers,'answerId')}; 
        case 'RESET_ANSWER':
                return {};
        default:
            return state;
    }
}
