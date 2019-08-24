import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import config from '../components/firebase-config.js';
import history from '../history';



firebase.initializeApp(config);

const db = firebase.firestore();


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
                    questions.unshift(question);
                  },);
                  dispatch({type:'INIT',questions});
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
 }

 export const fetchAnswers = (id) => (dispatch) => {
   console.log('ananan')
  const answers = [];
  db.collection('tweets').doc(id).collection('answer').orderBy('created').get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    //allitemsにデータを代入
                    const answer = {
                        name: doc.data().name,
                        answer: doc.data().answer,
                    }
                    answers.unshift(answer);

                    //リデューサー
                }, );
                dispatch({type:'LOAD_ANSWER',answers});
            }, );
 }

 export const resetAnswer = () => dispatch => {
  const answers={};
  dispatch({type:'RESET_ANSWER',answers}); 
 }

 //詳細ページで再読み込みする際、これがないとページが表示されない
 export const fetchPost = (id) => (dispatch) => {
  db.collection('tweets').doc(id).get()
            .then(snapshot => {
                    //allitemsにデータを代入
                    const  payload = {
                        name: snapshot.data().name,
                        title: snapshot.data().title,
                        question: snapshot.data().question,
                        id:id
                    }
      
                    dispatch({type: 'FETCH_QUESTION',payload:payload});

                }, );

            
 }
