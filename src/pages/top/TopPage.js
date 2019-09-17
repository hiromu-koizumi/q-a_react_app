import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchQuestions,scrollFetchQuestions} from '../../actions';
import {Link} from 'react-router-dom';
import QuestionList from './QuestionList';
import {Waypoint} from 'react-waypoint';
import Header from '../../components/qa/header/Header';





//質問の表示処理
class TopPage extends Component{


    scrollFetchQuestions = () =>{
        let questionsLastNum = this.props.data.length - 1
        this.props.scrollFetchQuestions(this.props.data[questionsLastNum])
    }

    
    render() {
            return (
                <div className = "top-wrap">
                    <Header/>
                    <QuestionList/>
                    <Waypoint onEnter={this.scrollFetchQuestions}/>
                    {this.props.loading && (
                        <div className="loader-wrap">
                            <div className="ui active centered inline loader"></div>
                        </div>
                    )}
                </div>
            );
        }
    }

    const mapStateToProps = (state) =>{
        return { 
            data: Object.values(state.questions),
            page: state.page.currentPageNumber,
            loading: state.loading.loading
        };
    }


export default connect(mapStateToProps,{fetchQuestions,scrollFetchQuestions})(TopPage);