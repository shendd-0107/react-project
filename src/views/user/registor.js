import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
class Registor extends Component {
    state={
        user:"",
        pwd:'',
        repwd:""
    }
    render() {
        let {user,pwd,repwd} = this.state;
        return (
            <div className="regs">
            <div className="login-header">
                 <div><img src="http://s.gxtodo.com/static/img/logo.png" alt=""/></div>
            </div>
            <div className="login-main">
                 <div className="login-content">
                     <div className="login-content-left"><img src="http://s.gxtodo.com/dist/img/girls.png" alt=""/></div>
                     <div>
                         <div className='login'>
                             <label>邮箱：<input type='text' placeholder='请输入用户名' /></label>
                             <label>密码：<input type='password' placeholder='请输入密码' /></label>
                             <label>确认密码：<input type='password' placeholder='请输入密码' /></label>
                             <button>注册</button>
                             <NavLink to='/user/login' style={{
                                 marginTop:20
                             }}>已有账号，去登录</NavLink>
                         </div>
                     </div>
                 </div>
            </div>
         </div>
        )
    }
}
export default Registor;