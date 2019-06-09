import React, { Component } from 'react'

 const islogin = (Com)=>{
     console.log(Com)
    return class extends Component{
        state={
            islogin:false
        }
        render(){
            let {islogin} = this.state;
            return islogin ? <Com {...this.props}></Com> : <></>
        }
        componentDidMount(){
            let {history:{push}}=this.props;
            let user = window.localStorage.getItem("user")
            if(user){
                this.setState({islogin:true})
            }else{
                push("/login")
            }
        }
    }
  
}
export default islogin;
