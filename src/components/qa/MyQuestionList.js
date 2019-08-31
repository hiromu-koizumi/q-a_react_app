import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMyQuestions} from '../../actions';
import {Link} from 'react-router-dom';


//質問の表示処理
class MyQuestionList extends Component{

    
    componentDidMount(){
        if(this.props.userId){
            this.props.fetchMyQuestions(this.props.userId)
        }
    }
    
    //最初に開くページがマイページの時に必要な処理
    //初期ページがマイページだとcomponentDidMountが呼び出される時にstoreにユーザー情報が保存されていないためthis.props.userIdで値が取れずにエラーを吐く
    componentDidUpdate(prevProps) {
        // 典型的な使い方(props を比較することを忘れないでください)
        if (this.props.userId && this.props.userId !== prevProps.userId ) {
            this.props.fetchMyQuestions(this.props.userId)
        }
      }

    render() {
        if(this.props.questions){
            return (
                < div className = "wrap" >
                    <p>質問</p>
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.questions.map((item, i) => (
                        <div className="ui fluid card" key={i}>
                            <div className="content">
                                <Link to={`/qa/${item.questionId}`} className="header">
                                {item.title}
                                </Link>
                                <div className="meta">{item.name}</div>
                                <div className="description">
                                    <p>{item.question}</p>
                                </div>
                                <div className="description">
                                    <p>いいね{item.goodCount}</p>
                                    <p>回答{item.answerCount}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            );
        }else{
            return null;
        }
        }
    }

   
    const mapStateToProps = (state) => {
        console.log("state")
        if (state.myData.questions){
            return {userId:state.auth.userId,questions:Object.values(state.myData.questions)}
        }
            return {userId:state.auth.userId}
        
    }
    

export default connect(mapStateToProps,{fetchMyQuestions})(MyQuestionList);