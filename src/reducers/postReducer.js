import {createQuestion} from '../actions'
import {createAnswer} from '../actions'



//レデューサー
export default (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            return {...state,...action.questions};
        case 'DETAIL':
            return detailReduce(state,action);
        case 'ADD_ANSWER':
            return addAnswerReduce(state,action);
        case 'LOAD_ANSWER':
            return loadAnswerReduce(state,action)
        default:
            return state;
    }
}


function detailReduce(state, action) {
    let data = {
    name:action.name,
    title:action.title,
    question: action.question,
    id:action.id
    }
    return {
        //...stateを入れることで現在ののstateを保持する
        //入れないと現在のstateが消えてしまう
        ...state,
        detail: data,
    }
}

function addAnswerReduce(state, action) {
    let data = {
    name:action.name,
    answer: action.answer,
    }
    
    //firebaseに保存
    createAnswer(data);
    
    //ここでstateを変更している
    return {
        ...state,
        answer: data,
    }
}
function loadAnswerReduce(state, action) {
    let data = {
    name:action.name,
    answer: action.answer,
    }
    
    let newdata = state.answer.slice();
    newdata.unshift(data);
    
    //ここでstateを変更している
    return {
        ...state,
        answer: data,
    }
}


