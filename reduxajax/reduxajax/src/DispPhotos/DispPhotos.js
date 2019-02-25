import React    from "react";
import template from "./DispPhotos.jsx";
import {connect} from 'react-redux'

class DispPhotos extends React.Component {
  constructor(){
    super();
    this.state={
      'headers':['ID','TITLE','URL'],
      'data':[],
      'keys':['id','title','url']
    }
  }
  render() {
    return template.call(this);
  }
}
const msp=(state)=>{
  return {
      'data':state.postsReducer.photos
  }  
}
export default connect(msp)(DispPhotos);
