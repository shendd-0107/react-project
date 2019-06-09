import React, { Component } from 'react'
import {Select } from "antd"
import {connect} from "react-redux"
import * as action from "../store/actions/action"
import {bindActionCreators} from "redux"

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class More extends Component {
    render() {
        let {tasktype,taskclass} = this.props
        return (
            <div className="more">
                <br/>
                优先级：
                <Select defaultValue={tasktype[0].hot} style={{ width: 120,marginLeft:20 }} onChange={handleChange}>
                    {
                        tasktype.map(item=><Option key={item.id} value={item.hot}>{item.hot}</Option>)
                    }
                </Select>
                <br/>
                <br/>
                  类型：
                <Select defaultValue={taskclass[0].hot} style={{ width: 120,marginLeft:20 }} onChange={handleChange}>
                    {
                        taskclass.map(item=><Option key={item.id} value={item.hot}>{item.hot}</Option>)
                    }
                </Select>
            </div>
        )
    }
}
export default connect(state=>{
    return {
        tasktype:state.data.tasktype,
        taskclass:state.data.taskclass
    }
},dispatch=>bindActionCreators(action,dispatch))(More)