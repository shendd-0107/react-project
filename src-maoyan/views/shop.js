import React, { Component } from 'react'
import Header from "../components/header"
export default class Shop extends Component {
  
  render() {
      let {history:{location:{query}}} = this.props;
    return (
      <div className="wrap">
        <Header title={query.nm} back={true}></Header>
        <main>
            详情页----{query.id}
        </main>
      </div>
    )
  }
}
