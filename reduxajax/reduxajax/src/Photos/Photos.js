import React    from "react";
import template from "./Photos.jsx";
import photoAction from '../Actions/photosActions';
import {connect} from 'react-redux'
class Photos extends React.Component {
  render() {
    return template.call(this);
  }

  fngetphotos(){
    debugger;
     this.props.k();
  }
}

const mdp=(d)=>{
   return{
     'k':()=>{
       debugger;
      photoAction(d);
     }
   }
}

export default connect(null,mdp)(Photos);
