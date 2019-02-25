import ServerCall from '../Services/ServerCall';
import store from '../Store/store';
const  photoAction=(d)=>{
    debugger;
    ServerCall.fnGet('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
      debugger;
      store.dispatch({
        'type':'PHOTOS',
        'payload':res.data
      })
    })
    .catch((res)=>{
      debugger;
      store.dispatch({
        'type':'PHOTOS',
        'payload':[]
      })
    })
}

export default photoAction;