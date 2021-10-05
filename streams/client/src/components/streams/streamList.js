import React from 'react';
import { connect } from 'react-redux'
import {fetchStreams } from "../../actions"
import { Link } from "react-router-dom"
import "../../style.css"

class StreamList extends React.Component{

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin(stream){
      if(stream.userId === this.props.currentUserId)
      {
          return <div id="up" className="content" >

              <h5 style={{marginLeft:"70px",marginTop:"10px"}} >{`StreamId: ${stream.id}`}</h5>
              <Link id="edit" to={`/streams/edit/${stream.id}`} className="ui button" >
                  <i className="large icon edit" ></i>
              </Link>
              <Link id="delete" to={`/streams/delete/${stream.id}`} className="ui button" >
                  <i className="large icon trash alternate" ></i>
              </Link>
          </div>
      }
    }

    renderList()
    {
        return this.props.streams.map(stream =>{
            return(
                <div className="item listSep designList" key={stream.id} >
                    <i id="icon" className = "large middle aligned icon camera retro" />
                    <div className="content" >
                        <h4 id="author" >{stream.author}</h4>
                        <Link id="title" to = {`/streams/${stream.id}`} >{stream.title}</Link>
                        <div id="des" className="description" >{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            )
        })
    }
    renderCreate()
    {
        if(this.props.isSignedIn)
        {
            return (
                <div style={{textAlign:"right"}} >
                <Link id="create" to="/streams/new" className="ui button " >Create Stream</Link>
                </div>
            )
        }
    }
    render() {
          
        return(<div>
            <h2 style={{display:"flex",justifyContent:"center",letterSpacing:"2px"}} >STREAMS</h2>
            {this.renderCreate()}
            <div className="ui grid container">
            {this.renderList()}
            </div>
            </div>)
    }
}

const mapStateToProps = (state) =>{
    return {
        
        streams :Object.values(state.streams) ,
        currentUserId : state.auth.userId,
        isSignedIn : state.auth.isSignedIn
    } 
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);