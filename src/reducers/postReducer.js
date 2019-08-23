
// const initData = {
//     data: [],
//     user: '',
//     title: '',
//     question: ''
// };

// //レデューサー
// export default (state = {}, action) => {
//     switch (action.type) {
//         case 'ADD':
//             return (...state, action);
//         case 'INIT':
//             return initReduce(state, action);
//         default:
//             return state;
//     }
// }
// let data = {
//     user:action.user,
//     title:action.title,
//     question: action.question,
//     }
//     let newdata = state.data.slice();
//     newdata.unshift(data);
    
//     //ここでstateを変更している
//     return {
//         data: newdata,
//     }