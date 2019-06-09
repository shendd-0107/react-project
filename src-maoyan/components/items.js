import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
 class Items extends Component {
  render() {
    let {nm,img,sc,star,showInfo,wish,id} = this.props
    
    return (
      <dl className="item">
        <dt>
            <img src={img} alt=""/>
        </dt>
        <dd>
            <h4>{nm}</h4>
            <p>{sc?sc:"暂无上映"}</p>
            <p>{star}</p>
            {wish && <p><b>{wish}</b>{sc?'人抢购':"人想看"}</p>}
            <p>{showInfo}</p>
        </dd>
        <dt>
            <p className={sc?'nowgo':'waitgo'} onClick={()=>{
              this.props.history.push({
                pathname:"/Shop",
                query:{id,nm},
                
              })
              
            }}>{sc?'抢购':"预购"}</p>
        </dt>
      </dl>
    )
  }
}
export default withRouter(Items)