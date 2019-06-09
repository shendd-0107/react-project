import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import axios  from "axios"
import "../../mock/data"
class Login extends Component {
    state={
        user:"",
        pwd:''
    }
    render() {
        let {user,pwd} = this.state;
        return (
            <div className="login">
               <div className="login-header">
                    <div><img src="http://s.gxtodo.com/static/img/logo.png" alt=""/></div>
               </div>
               <div className="login-main">
                    <div className="login-content">
                        <div className="login-content-left"><img src="http://s.gxtodo.com/dist/img/girls.png" alt=""/></div>
                        <div>
                            <div className='login'>

                                <label>邮箱：<input type='text' placeholder='请输入用户名' value={user} 
                                    onChange={(e)=>this.setState({user:e.target.value})}/></label>

                                <label>密码：<input type='password' placeholder='请输入密码' value={pwd} 
                                    onChange={(e)=>this.setState({pwd:e.target.value})}/></label>

                                <button type="button" onClick={()=>this.submitLogin(user,pwd)}>登录</button>

                                <NavLink to='/user/registor' style={{
                                    marginTop:20
                                }}>没有账号，去注册</NavLink>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
    submitLogin(user,pwd){
        if(user.trim() !== '' && pwd !== ''){
            axios.post("/api/user",{user,pwd}).then(res=>{
                let {code,msg} = res.data;
                if(code === 1){
                    alert(msg)
                    this.props.history.push("/begin")
                }
                else if(code === 0){
                    alert(msg)
                }
                else{
                    alert(msg);
                    this.props.history.push("/user/registor")
                }
            })
        }   
        else{
            alert("您输入的不能为空")
        }
    }
}
export default Login;