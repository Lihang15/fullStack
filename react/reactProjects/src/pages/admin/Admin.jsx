
import React, { Component } from 'react'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'
import Home from '../home/Home1'
import Category from '../category/category'
import User from '../user/user'
import Role from '../role/role'
import Product from '../product/product'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import { Redirect, Route, Switch } from 'react-router-dom'
import memoryUtil from '../../utils/memory'
const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
        if (!memoryUtil.token) {
            return <Redirect to='/login'></Redirect>
        }
        return (
            <Layout style={{ height: '100%' }}>
                <Sider><LeftNav /></Sider>
                <Layout>
                    <Header />
                    <Content style={{ backgroundColor: '#fff', margin: 20 }}>
                        <Switch>
                        <Redirect exact={true} from ='/' to='/home'></Redirect>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/category' component={Category}></Route>
                            <Route path='/product' component={Product}></Route>
                            <Route path='/role' component={Role}></Route>
                            <Route path='/user' component={User}></Route>
                            <Route path='/charts/bar' component={Bar}></Route>
                            <Route path='/charts/line' component={Line}></Route>
                            <Route path='/charts/pie' component={Pie}></Route>
                           
                        </Switch>


                    </Content>
                    <Footer style={{ textAlign: 'center' }}>这是我的网站@copy1232</Footer>
                </Layout>
            </Layout>

        )
    }

}