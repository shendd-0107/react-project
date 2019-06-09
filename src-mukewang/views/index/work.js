import React, { Component } from 'react'
import axios from "axios"
import "../../mock/coursedata"
import BScroll from "better-scroll"
import { Carousel  } from "antd"
export default class course extends Component {
    state={
        page:1,
        size:10,
        data:[],
        loadflag:false
    }
    render() {
        let {data,loadflag} = this.state;
        return (
            <div className="work-main">
                <div className="swiper">
                    <Carousel autoplay>
                        <div>
                            <img src={require("../../img/1.jpg")} alt=""/>
                        </div>
                        <div>
                            <img src={require("../../img/2.jpg")} alt=""/>
                        </div>
                    </Carousel>
                </div>
                <div className="heng">
                    <div className="long">
                        <dl>
                            <dt><h3>我是</h3></dt>
                            <dd><p>个好人</p></dd>
                        </dl>
                        <dl>
                            <dt><h3>我是</h3></dt>
                            <dd><p>个好人</p></dd>
                        </dl>
                        <dl>
                            <dt><h3>我是</h3></dt>
                            <dd><p>个好人</p></dd>
                        </dl>
                        <dl>
                            <dt><h3>我是</h3></dt>
                            <dd><p>个好人</p></dd>
                        </dl>
                        <dl>
                            <dt><h3>我是</h3></dt>
                            <dd><p>个好人</p></dd>
                        </dl>
                        <dl>
                            <dt><h3>我是</h3></dt>
                            <dd><p>个好人</p></dd>
                        </dl>
                        
                      
                    </div>
                </div>
                <div  className="work-scroll">
                <div className="work">
                    {
                        data &&  data.map((item,index)=><dl key={index} onClick={()=>{
                            this.props.history.push('/detail/'+item.id)
                        }}>
                        <dt><img src={item.img} alt=""/></dt>
                        <dd><h3>{item.title}</h3><p>{item.tag}</p></dd>
                    </dl>)
                    }
                    <div className={`loading ${loadflag?"active":""}`}><img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034917143.gif" alt=""/></div>
                </div>
            </div>
            </div>
           
        )
    }
    
    componentDidMount(){
        let {page,size} = this.state;
        this.getdata(page,size)
        this.better =new BScroll(".work-scroll",{
            probeType:3,
            click:true
        })
        this.scrollFn()
    }
    scrollFn(){

        this.better.on("scroll",()=>{
            let {maxScrollY,y} = this.better;
            if(y<maxScrollY-40){
                this.setState({loadflag:true})
            }
            else if(y<maxScrollY-20){
                this.setState({loadflag:false})
            }

        })
        this.better.on("scrollEnd",()=>{
            this.setState({loadflag:false})
        })
        this.better.on("touchEnd",()=>{
            let {page,size,loadflag} = this.state
            if(loadflag){
                page++;
                this.setState({page});
                this.getdata(page,size);
            }
        })
    }
    getdata(page,size){
        axios.post("/api/work",{page,size}).then(res=>{
            let {data} = this.state;
            data = data.concat(res.data.list)
            this.setState({data},()=>{
                this.better.refresh()
            })
        })
    }
}
