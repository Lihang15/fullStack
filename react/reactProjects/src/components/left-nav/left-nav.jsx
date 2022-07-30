
import React, { Component } from 'react'
import './index.css'
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom'
import {
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons';
import {connect} from 'react-redux'
import {setHeadrTitle} from '../../redux/actions'
const { SubMenu } = Menu;


class LeftNav extends Component {

    render() {
        const path = this.props.location.pathname
        return (
            <div className='left-nav'>
                <header className='left-nav-header'>
                    <img src="./logo192.png" alt="" />
                    <h1>后台管理</h1>
                </header>

                <Menu
                    selectedKeys={[path]}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="/home" icon={<PieChartOutlined />}>
                        <Link to='/home'>
                            首页
                        </Link>

                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="/category"><Link to='category' onClick={()=>{this.props.setHeadrTitle('品类管理改变的状态')}}>品类管理</Link></Menu.Item>
                        <Menu.Item key="/product"><Link to='product' onClick={()=>{this.props.setHeadrTitle('商品管理改变的状态')}}>商品管理</Link></Menu.Item>
                    </SubMenu>

                    <Menu.Item key="/user" icon={<PieChartOutlined />}>
                        <Link to='/user'>
                            用户管理
                        </Link>

                    </Menu.Item>
                    <Menu.Item key="/role" icon={<PieChartOutlined />}>
                        <Link to='/role'>
                            角色管理
                        </Link>

                    </Menu.Item>
                    <SubMenu key="sub2" icon={<MailOutlined />} title="图形图表">
                        <Menu.Item key="7"><Link to='/charts/bar'>柱状图</Link></Menu.Item>
                        <Menu.Item key="8"><Link to='/charts/line'>线图</Link></Menu.Item>
                        <Menu.Item key="9"><Link to='/charts/pie'>圆图</Link></Menu.Item>
                    </SubMenu>

                </Menu>

            </div>

        )
    }

}

export default connect(
    state=>({

    }),
    {setHeadrTitle}
)(withRouter(LeftNav)) 