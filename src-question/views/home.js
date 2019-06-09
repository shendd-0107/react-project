import React, { Component } from 'react'
import {Provider} from "react-redux"
import store from '../store/index'
class Home extends Component {
    state={
        button:[
            {
                title:"现场演练",
                id:1
            },
            {
                title:"模拟训练",
                id:2
            },
            {
                title:"最后冲刺",
                id:3
            }
        ]
    }
    render() {
        let {button} = this.state;
        let {history} = this.props;
        return (
            <div className="wrap">
                <header>11</header>
                    <main> 
                        <div className="swiper">swiper</div>
                        {
                            button.map(item=><button key={item.id} onClick={()=>{
                                history.push("/exam/"+item.id);
                            }}>{item.title}</button>)
                        }
                        <Provider store={store}>
                            
                        </Provider>
                    </main>
                    
                <footer></footer>
            </div>
        )
    }
}
export default Home