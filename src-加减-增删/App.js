import React from 'react';
import {Provider} from "react-redux"
import store from "./store/index"
import List from "./components/list/list"
import Cont from "./components/cont/cont"
import Add from "./components/add"
class App extends React.Component{
  
  render(){
    
    return <div>
      
      <Provider store={store}>
        <Add></Add>
      </Provider>

      <Provider store={store}>
        <List/>
        <Cont/>
      </Provider>
      
    </div>
  }
  
}

export default App;
