import React,{Component} from "react";
import request from "../request"
class Home extends Component{
    render(){
        return(
            <div>Home</div>
        );
    }
    async componentWillMount(){
        let data = await request.home();
        let data1 = await request.home1();
    }
}
export default Home;