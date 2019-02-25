import axios from 'axios';

class ServerCall{
    static fnGet(url){
           return axios.get(url);
    }
}

export default ServerCall;