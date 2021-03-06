import React from 'react'
import { connect } from 'react-redux';
import ResponseButton from './response_create/ResponseButton';

const ResponseList = ({questionId,answerId,response,answerUserId}) => {
    if(!response){
      return <div>Loading</div>;
    }
    return (
        <div className = "wrap">
            {/* propsにするかstateにするかで表示変わる。propsにすると */}
            {response.map((item, i) => (
                <div className="ui fluid card" key={i}>
                    <div className="content">
                        <div className="description">
                            <p>{item.response}</p>
                        </div>
                        <div className="">
                            <div className="meta name">{item.name}</div>
                        </div>
                            <ResponseButton answerUserId={answerUserId} questionId={questionId} answerId={answerId}/>
                    </div>
                </div>
            ))
            }
        </div>
    );
}

const mapStateToProps = (state,ownProps) =>{  

    return { 
        response: state.response[ownProps.answerId],
    };
}

export default connect(mapStateToProps)(ResponseList)
