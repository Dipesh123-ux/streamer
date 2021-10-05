import React from 'react';
import flv from "flv.js"
import { connect }  from "react-redux"
import { fetchStream } from "../../actions"


class StreamShow extends React.Component{


    constructor(props){
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
   
    }

    componentDidUpdate()
    {
        this.buildPlayer();
    }

    componentWillUnmount(){
        this.player.destroy();
    }
 

    buildPlayer(){
        if(this.player || !this.props.stream)
        {
            return;
        }
        this.player = flv.createPlayer({
            type:"flv",
            url : `http://localhost:8000/live/${this.props.match.params.id}.flv`
        })

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();

    }

 render()
 {

 if(!this.props.stream)
 {
      return (<div>Loading..</div>)
 }
 
    return (<div>
        <div style={{display:"flex"}} >
        <video ref={this.videoRef}  style={{height:"400px", width:"60%",borderRadius:"5px",boxShadow:"0 0 7px rgba(0,0,0)"}} controls  />
        <i id="showi" className="large icon video"> STREMER</i>
        </div>
        <h1 style={{textTransform:"capitalize"}} >{this.props.stream.title}</h1>
        <h5 style={{marginTop:"-10px",textTransform:"capitalize"}} >{this.props.stream.description}</h5>
    </div>);
 
}

}

const  mapStateToProps = (state,ownProps)=>{
    return { stream : state.streams[ownProps.match.params.id]}
}
    


export default connect(mapStateToProps,{ fetchStream })(StreamShow);








