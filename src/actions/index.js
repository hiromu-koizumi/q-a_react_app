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


export const fetchPosts = () => dispatch => {
  db.collection('tweets').orderBy('created').get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    //allitemsにデータを代入
                    const allItems = {
                        type: 'INIT',
                        user: doc.data().user,
                        title: doc.data().title,
                        question: doc.data().question,
                        id:doc.id,
                    }
                    //リデューサー
                    dispatch(allItems);
                }, );
            }, );
 }
export const fetchPost = (id) => dispatch => {
  db.collection('tweets').doc(id).get()
            .then(snapshot => {
                    //allitemsにデータを代入
                    const allItems = {
                        type: 'DETAIL',
                        user: snapshot.data().user,
                        title: snapshot.data().title,
                        question: snapshot.data().question,
                        id:snapshot.id
                    }
                    //リデューサー
                    dispatch(allItems);
                }, );
            
 }



 export const createQuestion = data => {
    //データベースに保存
    db.collection('tweets').add({
        ...data,
        created:
          firebase.firestore.FieldValue.serverTimestamp()
      }).then(doc => {
        console.log(`${doc.id}をDBに保存した`);
      })
        .catch(error => {
          console.log(error);
        });

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

