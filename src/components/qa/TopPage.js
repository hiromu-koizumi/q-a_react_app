import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setCurrentPage} from '../../actions';
import {Link} from 'react-router-dom';
import QuestionList from './QuestionList';
import Pagination from './Pagination'


//質問の表示処理
class TopPage extends Component{

    componentDidMount() {
      this.props.setCurrentPage(this.props.page)
    }
    
    render() {

        const postsPerPage = 5;
        const indexOfLastPost = this.props.page * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = this.props.data.slice(indexOfFirstPost, indexOfLastPost)
        const paginate = (pageNumber) => this.props.setCurrentPage(pageNumber)

            return (
                < div className = "wrap" >
                    <div style={{textAlign:'center'}}>
                        <Link to="/qa/new" className="ui button primary">
                            質問する
                        </Link>
                    </div>
                    <QuestionList currentPosts={currentPosts}/>
                    <Pagination postsPerPage={postsPerPage} totalPosts={this.props.data.length} paginate={paginate} currentPageNumber={this.props.page}/>
                </div>
            );
        }
    }

    const mapStateToProps = (state) =>{        
        return { 
            data: Object.values(state.questions),
            page: state.page.currentPageNumber
        };
    }


export default connect(mapStateToProps,{setCurrentPage})(TopPage);