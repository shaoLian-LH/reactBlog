import axios from 'axios';
let DEFAULT_PRE = "http://121.199.23.187:8090/";
const Request = {
    "get":"",
    "post":""
}
Request.get = (target)=>{
    return axios({
        method: "get",
        url: DEFAULT_PRE + target,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }
    })
}


export default Request;

