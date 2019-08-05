import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import { initQa } from './Store';

const db = firebase.firestore();
const collection = db.collection('tweets');

//質問の表示処理
class Item extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
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
                    }
                    let action = initQa(allItems);
                    this.props.dispatch(action);
                }, );
            }, );

    }

    render() {
        console.log(JSON.stringify(this.props.data))
        console.log(`${this.props.data}`)

            return (
                < div className = "wrap" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.data.map((item, i) => (
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

//((state)=>state)でstoreのstateを使用できるようにしている。それは、this.propsで使用できる。
export default connect((state)=>state)(Item);