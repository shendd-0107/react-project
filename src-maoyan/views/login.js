import React, { Component } from 'react'

 class Login extends Component {
    state={
        user:'',
        pwd:''
    }
  render() {
      
    return (
      <div className="wrap">    
        <p>用户名：<input type="text" ref="user" onChange={()=>{
            this.setState({user:this.refs.user.value})
        }}/></p>
        <p>密码<input type="password" ref="pwd" onChange={()=>{
            this.setState({pwd:this.refs.pwd.value})
        }}/></p>
        <p><button onClick={this.btn}>登录</button></p>
      </div>
    )
  }
  btn=()=>{
      let {user,pwd} = this.state;
      if(user!=="" && pwd!==""){
        window.localStorage.user=user;
        this.props.history.go(-1);
      }
      else{
          this.props.history.push("/login");
      }
  }
  componentDidMount(){

  }
}
export default Login;
