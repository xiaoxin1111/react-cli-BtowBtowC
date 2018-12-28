import request from "./http.js";
let url = "http://127.0.0.1:8000/";
let home = async () => await request.get(url + "send",{a:1,b:2,c:3});
let home1 = async () => await request.post(url + "send1",{a:1,b:2,c:3});
export default {
    home,
    home1
};