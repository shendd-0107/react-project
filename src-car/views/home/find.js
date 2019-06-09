import React, { Component } from 'react'
import "../../mock/index.js"
import axios from "axios"
import List from "../../components/list"
 class Find extends Component {
    state={
        data:[]
    }
    render() {
        let {data} = this.state;
        console.log(data);
        return (
            <div className="list">
                <div className="left">
                {
                    data && Object.keys(data).map((item,index)=><div key={index}><h3  ref={"scl"+index} >{item}</h3>
                    {
                        data[item].map((item1,index)=><li key={index}><dt><img alt="" src={item1.CoverPhoto}/></dt><dd>{item1.Name}</dd></li>)
                    }</div>)
                }
                </div>
                <div className="right">
                {
                    data && Object.keys(data).map((item,index)=><p key={index}
                    onClick={(e)=>this.scrollFn(index)}>{item}</p>)
                }
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.get("/citydata").then(({data:{data:{data}}})=>{
            let str = [...new Set(data.map(item=>item.Spelling.substr(0,1)))]
            let obj = {}
            str.forEach(item=>obj[item]=data.filter(key=>key.Spelling.substr(0,1)===item))
            this.setState({data:obj})
        })
    }
    scrollFn(ind){
        document.documentElement.scrollTop = this.refs['scl'+ind].offsetTop-80;
    }
}

export default Find;
