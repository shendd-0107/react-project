import React, { Component } from 'react'
import Header from "../components/header"
export default class search extends Component {
  render() {
    return (
      <div className="App search">
        <Header title='搜索' back={true}></Header>
        <main>
            <p className="ipt">
                <input type="text" placeholder="请输入你想看的电影"></input><button>go</button>
            </p>
        </main>
      </div>
    )
  }
}
