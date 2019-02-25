import React    from "react";
import template from "./DispPosts.jsx";
import {connect} from 'react-redux'
class DispPosts extends React.Component {
  constructor(){
    super();
    this.state={
      'headers':['ID','TITLE','BODY'],
      'data':[],
      'keys':['id','title','body']
    }
  }
  render() {
    return template.call(this);
  }
}

const msp=(state)=>{
    return {
        'data':state.postsReducer.posts
    }  
}
export default connect(msp)(DispPosts);
