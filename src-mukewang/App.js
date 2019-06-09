import React from 'react';
import "./scss/style.css"
import {Provider} from "react-redux"
import Router from "./router/index"
import store from "./store/index"
class App extends React.Component{
  render(){
    return <Provider store={store}><Router/></Provider>
  }
}
export default App;