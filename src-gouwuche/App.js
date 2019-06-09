import React from 'react';
import "./scss/style.css"
import {Provider} from "react-redux"
import store from "./store/index"
import Shop from "./components/shop"
class App extends React.Component{
  state={
    data:[
      {
          id:0,
          title:'70-80'
      },
      {
          id:1,
          title:'60-70'
      },
      {
          id:2,
          title:'80-90'
      },
      {
          id:3,
          title:'以上都不对'
      }
  ]

  }
  render(){
    return <div className="wrap">
      <header>11</header>
        <Provider store={store}>
          <Shop />
        </Provider>
      <footer><h3>总价：</h3></footer>
    </div>
  }
  componentDidMount(){
    let {data} = this.state;
    let aa = data.sort((a,b)=>{
      return Math.random()-0.5;
    })
    console.log(aa,'---aa');
  }
}

export default App;
