import React, { Component } from 'react'
import {Provider} from "react-redux"
import store from "../store/index"
import List from "../components/list"
class Exam extends Component {
    render() {
        return (
            <div className="wrap">
                <header>11</header>
                    <main>
                        <Provider store={store}>
                            <List/>
                        </Provider>
                    </main>
                    
                <footer></footer>
            </div>
        )
    }
}
export default Exam;