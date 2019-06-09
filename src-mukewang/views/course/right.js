import React, { Component } from 'react'
import axios from "axios"
import '../../mock/coursedata'
export default class web extends Component {
    state={
        data:[]
    }
    render() {
        let {match} = this.props
        let {data} = this.state;
        return (
            <div>
                {match.params.c}
                {
                    data && data.map((item)=><dl key={item.id}>
                        <dt><img src={item.img} alt=""/></dt>
                        <dd><h3>{item.title}</h3><p>{item.person}</p><p>{item.tag}</p></dd>
                    </dl>)
                }
            </div>
        )
    }
    componentWillReceiveProps(newprops){
        let {match:{params:{c}}} = newprops;
        axios.post("/api/right",{name:c}).then(res=>{
            this.setState({data:res.data.list})
        })
    }
}
