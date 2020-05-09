import axios from 'axios';
let DEFAULT_PRE = "https://yuudachi.cn:444/";
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
Request.post = (target, data) => {
    return axios({
        method: "post",
        url: DEFAULT_PRE + target,
        withCredentials: true,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export default Request;

