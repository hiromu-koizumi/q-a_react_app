import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setCurrentPage,fetchQuestions,scrollFetchQuestions} from '../../actions';
import {Link} from 'react-router-dom';
import QuestionList from './QuestionList';
import Pagination from '../../components/qa/Pagination'
import {Waypoint} from 'react-waypoint';



//質問の表示処理
class TopPage extends Component{

    componentDidMount() {
      this.props.setCurrentPage(this.props.page)
    }

    scrollFetchQuestions = () =>{
        let questionsLastNum = this.props.data.length - 1
        this.props.scrollFetchQuestions(this.props.data[questionsLastNum])
    }

    
    render() {
            return (
                < div className = "wrap" >
                    <div style={{textAlign:'center'}}>
                        <Link to="/qa/new" className="ui button primary">
                            質問する
                        </Link>
                    </div>
                    <QuestionList/>
                    <Waypoint onEnter={this.scrollFetchQuestions}/>
                    {this.props.loading && (
                        <div class="ui active centered inline loader"></div>
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


export default connect(mapStateToProps,{setCurrentPage,fetchQuestions,scrollFetchQuestions})(TopPage);