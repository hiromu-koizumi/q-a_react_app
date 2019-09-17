export default (state = {tab: 'question-tab'}, action) => {
    switch (action.type) {
        case 'MYPAGE_TAB_CHANGE':
            return {tab:action.payload}; 
        default:
            return state;
    }
}