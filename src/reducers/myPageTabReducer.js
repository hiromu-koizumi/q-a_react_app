

export default (state = {tab: 'panel1'}, action) => {
    switch (action.type) {
        case 'MYPAGE_TAB_CHANGE':
            return {tab:action.payload}; 
        default:
            return state;
    }
}