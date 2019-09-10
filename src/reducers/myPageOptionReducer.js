const INTIAL_STATE = {
    showButton:true,
    showMessage:false,
};

export default (state = INTIAL_STATE,action) =>{
    switch(action.type){
        
        case "CHANGE_OPTION":
            return {
                ...state,
                showButton:action.showButton,
                showMessage:action.showMessage
            };
         default:
            return state;
    }
}