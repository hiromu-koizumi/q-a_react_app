import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMyAnswers,scrollFetchMyAnswers} from '../../actions';
import {Link} from 'react-router-dom';
import {Waypoint} from 'react-waypoint';



//質問の表示処理
class MyAnswerList extends Component{
    
    componentDidMount(){
        if(this.props.userId){
            this.props.fetchMyAnswers(this.props.userId)
        }
    }
    
    //最初に開くページがマイページの時に必要な処理
    //初期ページがマイページだとcomponentDidMountが呼び出される時にstoreにユーザー情報が保存されていないためthis.props.userIdで値が取れずにエラーを吐く
    componentDidUpdate(prevProps) {
        // 典型的な使い方(props を比較することを忘れないでください)
        if (this.props.userId && this.props.userId !== prevProps.userId ) {
            this.props.fetchMyAnswers(this.props.userId)
        }
      }
    scrollFetchMyAnswers = () =>{
        let answersLastNum = this.props.answers.length - 1
        this.props.scrollFetchMyAnswers(this.props.answers[answersLastNum],this.props.userId)
    }

    render() {
        if(this.props.answers){
            return (
                < div className = "myanswer-wrap ui container" >
                    <p>回答</p>
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.answers.map((item, i) => (
                        <div className="ui fluid card" key={i}>
                            <div className="content">
                                <Link to={`/qa/${item.questionId}`} className="header">
                                    {item.answer}
                                </Link>
                                <div className="description myanswer-icon">
                                    <i className="heart icon red"></i>{item.goodCount}
                                </div>
                            </div>
                        </div>
                    ))
                    }
                     <Waypoint onEnter={this.scrollFetchMyAnswers}/>
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

        if (state.myAnswers){
            return {
                userId:state.auth.userId,
                answers:Object.values(state.myAnswers),
                loading:state.loading.loading
            }
        }
            return {userId:state.auth.userId}
        
    }
    

export default connect(mapStateToProps,{fetchMyAnswers,scrollFetchMyAnswers})(MyAnswerList);