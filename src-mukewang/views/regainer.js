import React, { Component } from 'react'
import "../mock/coursedata"
import axios from "axios"
export default class regainer extends Component {
    state={
        user:'',
        pwd:'',
        repwd:"",
        flag:false
    }
    render() {
        let {user,pwd,repwd,flag} = this.state;
        return (
            <div>
                 <p>用户名<input type="text" placeholder="用户名" value={user} 
                onChange={(e)=>this.setState({user:e.target.value})}
                /></p>

                <p>密码<input type="password" placeholder="密码" value={pwd}
                onChange={(e)=>this.setState({pwd:e.target.value})}  
                /></p>

                <p>确认密码<input type="password" placeholder="确认密码" value={repwd}
                onChange={(e)=>this.setState({repwd:e.target.value})}  
                /></p>

                <p style={{ color:'red',display:flag?"block":"none"}}>用户或密码不正确</p>
                <p><button type="button" onClick={()=>this.submitFn(user,pwd,repwd)}>登录</button></p>
            </div>
        )
    }
    submitFn(user,pwd,repwd){
        if(pwd === repwd){
            axios.post("/api/Regainer",{user,pwd}).then(res=>{
                let {code,msg} = res.data
                if(code){
                    alert(msg)
                    this.props.history.push("/login");
                }
            })
        }
        else{
            alert("您输入的密码和确认密码不匹配")
        }
    }
}
