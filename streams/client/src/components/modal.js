import React from 'react'
import ReactDOM from 'react-dom'


const Modal = props =>{
    return ReactDOM.createPortal(
     <div style={{display:"flex",justifyContent:"center"}} onClick={props.onDismiss}>
         <div onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active">
          <div className="header">{props.title}</div>
          <div className="content" >
              {props.content}
          </div>
          <div className="actions" >
             {props.actions}
          </div>
         </div>
     </div>, 
     document.getElementById("modal"));
}

export default Modal;