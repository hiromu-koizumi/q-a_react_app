import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMyQuestions,scrollFetchMyQuestions} from '../../actions';
import {Link} from 'react-router-dom';
import {Waypoint} from 'react-waypoint';



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
      scrollFetchMyQuestions = () =>{
        let questionsLastNum = this.props.questions.length - 1
        this.props.scrollFetchMyQuestions(this.props.questions[questionsLastNum],this.props.userId)
    }

    render() {
        if(this.props.questions){
            return (
                < div className = "myquestion-wrap ui container" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.questions.map((item, i) => (
                        <div className="ui fluid card" key={i}>
                            <div className="content">
                                <Link to={`/qa/${item.questionId}`} className="my-question-link">
                                {item.question}
                                </Link>
                                <div className="myquestion-icon description flex">
                                    <div><i className="heart icon red"></i>{item.goodCount}</div>
                                    <div className="myquestion-comment-icon"><i className="comment outline icon"></i>{item.answerCount}</div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    <Waypoint onEnter={this.scrollFetchMyQuestions}/>
                    {this.props.loading && (
                        <div className="loader-wrap">
                            <div className="ui active centered inline loader"></div>
                        </div>
                    )}
                </div>
            );
        }else{
            return null;
        }
        }
    }

   
    const mapStateToProps = (state) => {
        if (state.myQuestions){
            return {
                userId:state.auth.userId,
                questions:Object.values(state.myQuestions),
                loading:state.loading.loading
            
            }
        }
            return {userId:state.auth.userId}
    }
    

export default connect(mapStateToProps,{fetchMyQuestions,scrollFetchMyQuestions})(MyQuestionList);