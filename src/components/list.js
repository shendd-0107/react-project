import React, { Component } from 'react'

export default class list extends Component {
    render() {
        let {title,color,back} = this.props;
        return (
            <div className="task-list">
                <div className="title" style={{color,background:back}}
                    onClick={(e)=>{
                        console.log(e.target,'-------e',e.currentTarget)
                    }}
                ><p>{title}</p><b>+</b></div>
                <div className="task-main">
                    
                </div>
            </div>
        )
    }
}
