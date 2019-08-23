import React from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../../actions';


class QaDetail extends React.Component{

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    render(){
        if(!this.props.post){
            return <div>Loading...</div>
        }

        const  {user,title,question} = this.props.post

        return (
            <div>
                <h1>{title}</h1>
                <h5>{user}</h5>
                <h5>{question}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.data.detail)
    return {post:state.data.detail};
}

export default connect(mapStateToProps,{fetchPost})(QaDetail);