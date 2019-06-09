import React from 'react';
import {Provider} from "react-redux"
import Home from "./views/home"
import store from "./store/index"
function App() {
  return (
    <Provider store={store}>
        <Home/>
    </Provider>
  );
}

export default App;
