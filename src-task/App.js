import React from 'react';
import {connect} from "react-redux"
import * as action from "./store/actions/action"
import {bindActionCreators} from "redux"
import {Icon, Button,Row,Col,Modal,Input,DatePicker   } from "antd";
import More from "./components/more"

const {TextArea } = Input;



class App extends React.Component{
  state = { 
    typeopen: false ,
    typename:'',
    taskopen:false,
    more:false,
    tasktitle:'',
    taskcont:'',
    timer:''
  };
  render(){
    let {data,handleOk,taskOk} = this.props;
    return <div className="wrap">
        <Row>
          {
            data.map((item,index)=><Col span={6} key={item.id}>
              <h3>{item.title}</h3>{ item.open ? <Button 
                onClick={()=>{this.setState({taskopen:true})}}><Icon type="plus" /></Button>:""}
              {
                item.task && item.task.map((taskitem,taskindex)=><div key={taskindex}>{taskitem.title}</div>)
              }
            </Col>)
          }
          <Col span={6}><Button 
            onClick={()=>{this.setState({typeopen:true})}}><Icon type="plus" />新建一个呀</Button></Col>
        </Row>

{/* ------------------------- type 弹框  ------------------------- */}
        <Modal
          title="写入你想添加的任务的类 ~"
          visible={this.state.typeopen}
          onOk={()=>{
            handleOk(this.state.typename)
            this.setState({typename:'',typeopen:false})
          }}
          onCancel={this.handleCancel.bind(this)}
        >
          <input type="text" value={this.state.typename} 
            onChange={(e)=>this.setState({typename:e.target.value})} placeholder="你的名字~"/>
        </Modal>
{/* -------------------------  task 弹框 ------------------ */}
        <Modal visible={this.state.taskopen}
          title="开始创建任务吧 ~"
          onOk={()=>{
            let {tasktite,taskcont,timer} = this.state;
          taskOk({})
            console.log(tasktite,taskcont,timer,'-----------')
            // this.setState({typename:'',typeopen:false})
          }}
          onCancel={this.handleCancel.bind(this)}
          >
          <TextArea  placeholder="任务标题"
            autosize={{ minRows: 2, maxRows: 6 }}
            value={this.state.tasktitle} 
            onChange={(e)=>this.setState({tasktitle:e.target.value})}
          ></TextArea >
          <br/>
          备注：
          <TextArea  placeholder="写下你的备注"
            autosize={{ minRows: 2, maxRows: 6 }}
            value={this.state.taskcont} 
            onChange={(e)=>this.setState({taskcont:e.target.value})}
          ></TextArea >
          <br />
          请选择时间:<DatePicker style={{marginTop:20,marginLeft:10}} onChange={()=>{console.log(onChange())}} />
          <br/>
          <br/>
          <Button onClick={()=>this.setState({more:!this.state.more})}>更多</Button>
          {
            this.state.more ? <More></More> : ""
          }
        </Modal>
    </div>
  }

  componentDidMount(){
    let {initFn} = this.props;
    initFn("/api/data")
  }
  
  handleCancel(){
    this.setState({typeopen:false,taskopen:false})
  }
  // taskonChange(date, dateString) {
  //   // this.setState({timer:date})
  //   console.log(this,"this")
  //   console.log(date, dateString,'------- timer');
  // }
}

export default connect(state=>{
  return {
    data:state.data.data
  }
},dispatch=>{
  return bindActionCreators(action,dispatch)
})(App);
