
import React, { Component } from 'react'
import './index.css'
import { formateDate } from '../../utils/dateUtils'
import memoryUtil from '../../utils/memory'
import {connect} from 'react-redux'


class Header extends Component {
    state = {
        currentTime: formateDate(Date.now())
    }
    getTime = () => {
        this.TimeID = setInterval(() => {
            let timeStr = formateDate(Date.now())
            this.setState({ currentTime: timeStr })
        }, 1000)
    }
    componentDidMount() {
        this.getTime()
    }
    componentWillUnmount() {
        clearInterval(this.TimeID)
    }
    render() {
        const { currentTime } = this.state
        return (
            <div className="header">
                <div className='header-top'>
                    <span>redux测试数据：{this.props.headTitle}</span>
                    <span>欢迎，{memoryUtil.token}</span>
                    <a href="javascript:">退出</a>
                </div>
                <div className='header-bottom'>
                    <div>{currentTime}</div>
                </div>
            </div>
        )
    }
}

export default connect(
    state=>({headTitle:state.headerTitle}),
    {}
)(Header)