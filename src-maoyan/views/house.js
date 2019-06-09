import React, { Component } from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
export default class house extends Component {
  render() {
    return (
      <div className="App">
        <Header title="影院" back={true}></Header>
        <main>
          影院
        </main>
        <Footer></Footer>
    </div>
    )
  }
}
