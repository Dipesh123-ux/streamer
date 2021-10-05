import React from 'react';
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth"
import "../style.css"

const Header = () =>{
    return (<div className="ui mini menu" >
           <Link to="/" className="item" >
           <i class="video camera icon"></i>
               STREMER
           </Link>
           <div className=" right menu" >
               <Link to="/" className="active item" >
                   All Streams
               </Link>
           </div>
           <div className="item" >
           <GoogleAuth />
           </div>
           
    </div>);
}

export default Header;