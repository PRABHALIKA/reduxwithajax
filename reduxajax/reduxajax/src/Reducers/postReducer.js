import { initVal } from '../Utils/init';
const postsReducer = (state = initVal, actions) => {

    switch (actions.type) {
        case 'POSTS':
            state = {
                ...state,
                'posts': actions.payload
            }
            break;
        case 'PHOTOS':
            state = {
                ...state,
                'photos': actions.payload
            }
            break;
    }
    return state;
}

export default postsReducer;