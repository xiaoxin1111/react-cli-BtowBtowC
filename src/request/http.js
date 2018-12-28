import Axios from "axios";
let get = async (url,data) => {
    return await new Promise((resplve,reject) => {
        Axios.get(url,{params:data}).then(res=>{
            resplve(res);
        })
    }).then(res=>{
        return res;
    })
}
let post = async (url,data) => {
    let str = "";
    for(let item in data){
        str += item + "=" + data[item] + "&";
    }
    str = str.substr(0,str.length - 1);
    return await new Promise((resplve,reject)=>{
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if(xmlhttp.status == 200 && xmlhttp.readyState == 4)resplve(xmlhttp.responseText);
        }
        xmlhttp.open("post",url);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(str);
    }).then(res=>{
        return JSON.parse(res);
    })
}
export default {
    get:get,
    post:post};