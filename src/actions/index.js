import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import config from '../components/firebase-config.js';
import history from '../history';



firebase.initializeApp(config);

const db = firebase.firestore();


export function addQa(user, title, question) {
    return {
        type: 'ADD',
        user: user,
        title: title,
        question:question
    }
}


export const fetchPosts = () => async (dispatch) => {
  const questions = [];
  await db.collection('tweets').orderBy('created').get()
            .then(snapshot => {
              // console.log(snapshot.docs);
                snapshot.docs.map(doc => {
                    //allitemsにデータを代入
                    console.log(doc.data())
                    const question = {
                        name: doc.data().name,
                        title: doc.data().title,
                        question: doc.data().question,
                        id:doc.id,
                    }
                    // console.log(allItems)
                    // console.log(all)
                    questions.unshift(question);
                    //リデューサー
                    // dispatch(allItems);
                  },);
                  dispatch({type:'INIT',questions});
            }, );
 }
export const fetchPost = (id) => dispatch => {
  db.collection('tweets').doc(id).get()
            .then(snapshot => {
                    //allitemsにデータを代入
                    const allItems = {
                        type: 'DETAIL',
                        name: snapshot.data().name,
                        title: snapshot.data().title,
                        question: snapshot.data().question,
                        id:snapshot.id
                    }
                    //リデューサー
                    dispatch(allItems);
                }, );
            
 }



 export const createQuestion = formValues => async(dispatch) =>{
    //データベースに保存
    db.collection('tweets').add({
        ...formValues,
        created:
          firebase.firestore.FieldValue.serverTimestamp()
      }).then(doc => {
        console.log(`${doc.id}をDBに保存した`);
      })
        .catch(error => {
          console.log(error);
        });
        console.log(formValues)

        dispatch({type:"ADD",payload:formValues});


 }

 export const createAnswer = (formValues,id) => async (dispatch) => {

  db.collection('tweets').doc(id).collection('answer').add({
        ...formValues,
        created:
          firebase.firestore.FieldValue.serverTimestamp()
      }).then(doc => {
        console.log(`${doc.id}をDBに保存した`);
      })
        .catch(error => {
          console.log(error);
        });

        dispatch({type:"ADD_ANSWER",payload:formValues});
 }

 export const fetchAnswers = (id) => (dispatch) => {
  db.collection('tweets').doc(id).collection('answer').orderBy('created').get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    //allitemsにデータを代入
                    const allItems = {
                        type: 'LOAD_ANSEWR',
                        name: doc.data().name,
                        answer: doc.data().answer,
                    }
                    //リデューサー
                    dispatch(allItems);
                }, );
            }, );
 }

