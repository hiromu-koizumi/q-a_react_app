import React, { Component } from 'react';
import { connect } from 'react-redux';

import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
// import config from '../firebase-config.js';

// firebase.initializeApp(config);
const db = firebase.firestore();
const collection = db.collection('tweets');

//質問の表示処理
class Item extends Component{
   
    constructor(props) {
        super(props);

        // stateの値を再定義しているのは、ここで値の変更を出来るようにするため。
        // stateをpropsで受け取り値を変更することは出来ない。
        this.state = {
            data:[],
            user: '',
            title: '',
            question: ''
        };
    }
    
    componentDidMount() {
            //DBから値を取得

        collection.orderBy('created').get()
          .then(snapshot => {
            snapshot.docs.map(doc => {
              console.log(doc.data());
    
              const allItems = {
                user: doc.data().user,
                title: doc.data().title,
                question: doc.data().question,
                created: doc.data().created,
              }
    
              this.setState(state => ({
                data: state.data.concat(allItems),
                user: '',
                title: '',
                question: ''
              }));
            });
          });
    }
    
    render() {
        return (
            <div className="wrap">
                {this.state.data.map((item, i) => (
                    <a className="ui fluid card" key={i}>
                        <div className="content">
                            <div className="header">{item.title}</div>
                            <div className="meta">{item.user}</div>
                            <div className="description">
                                <p>{item.question}</p>
                            </div>
                        </div>
                    </a>
                    ))
                }
            </div>
            );
    }
}

//((state)=>state)で呼び出し元のstateを使用できるようにしている。それは、this.propsで使用できる。
export default connect((state)=>state)(Item);