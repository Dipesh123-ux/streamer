import React from 'react';
import { connect } from "react-redux"
import Modal from "../modal"
import { Link } from "react-router-dom"
import History from "../../history"
import {fetchStream , deleteStream } from "../../actions"


class StreamDelete extends React.Component{


    componentDidMount()
    {
        this.props.fetchStream(this.props.match.params.id);
    }


renderActions()
{
    return(
        <React.Fragment>
            <button onClick={()=> this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
            <Link to="/"  className="ui button">Cancel</Link>
        </React.Fragment>
    )
}

renderContent()
{
    if(!this.props.stream)
    {
        return 'Are you sure you want to delete this Stream?'
    }
    return `Are you sure you want to delete this stream with title : ${this.props.stream.title}`
}
    
    render()
    {
        
    return (<div >

          <Modal  title="Delete Stream" content={this.renderContent()} actions={this.renderActions()} onDismiss={()=> History.push("/")} />
    </div>);
    }

}
const mapStateToProps = (state,ownProps)=>{
    return {stream : state.streams[ownProps.match.params.id]}
}



export default connect(mapStateToProps ,{ fetchStream ,deleteStream })(StreamDelete); 