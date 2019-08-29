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
        console.log(this.props.answers)
        if(this.props.answers){
            return (
                < div className = "wrap" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.answers.map((item, i) => (
                        <div className="ui fluid card" key={i}>
                            <div className="content">
                                <Link to={`/qa/${item.id}`} className="header">
                                {item.title}
                                </Link>
                                <div className="meta">{item.name}</div>
                                <div className="description">
                                    <p>{item.answer}</p>
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
        if (state.myData.answers){
            return {userId:state.auth.userId,answers:Object.values(state.myData.answers)}
        }
            return {userId:state.auth.userId}
        
    }
    

export default connect(mapStateToProps,{fetchMyQuestions})(MyQuestionList);