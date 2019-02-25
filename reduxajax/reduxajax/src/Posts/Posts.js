import React    from "react";
import template from "./Posts.jsx";
import postAction from '../Actions/postAction';
import {connect} from 'react-redux'
class Posts extends React.Component {
  render() {
    return template.call(this);
  }
  fnGetPosts(){
    postAction(this.props.d);
  }
}

const mdp=(dispatch)=>{
  return{
     'd':dispatch
  }
}

export default connect(null,mdp)(Posts);
