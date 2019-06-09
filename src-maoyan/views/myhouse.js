import React, { Component } from 'react'
import Header from "../components/header"
import islogin from  "../utils/index"
 class House extends Component {
  render() {
    return (
      <div className="App">
        <Header title="我的" back={true}></Header>
        <main>
          我的
        </main>
        
    </div>
    )
  }
}
export default islogin(House);