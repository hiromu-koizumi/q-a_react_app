import React from 'react';
import {connect} from 'react-redux';
import {fetchPost,createAnswer} from '../../actions';
import AnswerForm from './AnswerForm';
import AnswerList from './AnswerList';


class QaDetail extends React.Component{

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    onSubmit = (formValues,id) => {
        console.log(id)
        this.props.createAnswer(formValues,id);
    }

    render(){
        if(!this.props.post){
            return <div>Loading...</div>
        }

        console.log(this.props.post)
        const  {name,title,question} = this.props.post
    

        return (
            <div>
                <h1>{title}</h1>
                <h5>{name}</h5>
                <h5>{question}</h5>
                {/* <AnswerList id={this.props.match.params.id}/> */}
                <AnswerForm　onSubmit={this.onSubmit} id={this.props.match.params.id}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {post:state.data.detail};
}

export default connect(mapStateToProps,{fetchPost,createAnswer})(QaDetail);