
import ServerCall from '../Services/ServerCall';
const postAction=(dispatch)=>{
  debugger;
  ServerCall.fnGet('https://jsonplaceholder.typicode.com/posts')
  .then((res)=>{
    debugger;
    dispatch({
      'type':'POSTS',
      'payload':res.data
    })
  })
  .catch((res)=>{
    debugger;
    dispatch({
      'type':'POSTS',
      'payload':[]
    })
  })
}

export default postAction;