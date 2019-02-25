import {initVal} from '../Utils/init';

const photosReducer=(state=initVal,actions)=>{
    debugger;
    if(actions.type=='PHOTOS'){
         state={
             ...state,
             'photos':actions.payload
         }
    }

    return state;
}

export default photosReducer;