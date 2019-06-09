import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from "react-router-dom"
 class Header extends Component {
  static defaultProps={
      back:false,
      title:""
  }
  static propTypes = {
    back: PropTypes.bool,
    title:PropTypes.string
  }
  render() {
    let {back,title} = this.props;
    return (
      <header>
          {back && <span onClick={()=>{
            this.props.history.go(-1)
          }}>&lt;</span>}
          <span>{title}</span>
      </header>
    )
  }
}
export default withRouter(Header);
