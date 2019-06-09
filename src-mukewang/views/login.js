import React, { Component } from 'react'
import "../mock/coursedata"
import axios from "axios"
export default class login extends Component {
    state={
        user:'',
        pwd:'',
        flag:false
    }
    render() {
        let {user,pwd,flag} = this.state;
        return (
            <div className="login">
                <p>用户名<input type="text" placeholder="用户名" value={user} 
                onChange={(e)=>this.setState({user:e.target.value})}
                /></p>

                <p>密码<input type="password" placeholder="密码" value={pwd}
                onChange={(e)=>this.setState({pwd:e.target.value})}  
                /></p>
                <p style={{ color:'red',display:flag?"block":"none"}}>用户或密码不正确</p>
                <p><button type="button" onClick={()=>this.submitFn(user,pwd)}>登录</button></p>
            </div>
        )
    }
    submitFn(user,pwd){
        let {history:{push}} = this.props;
        axios.post("/api/login",{user,pwd}).then(res=>{
            let {code} = res.data;
            if(code === 1){
                push("/")
                localStorage.username = user;
            }
            else if(code === 2){
                alert("您还没有注册，请您先注册")
                push("/regainer")
            }
            else{
                this.setState({flag:true})
            }
        })
    }
}
