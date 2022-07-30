import React, { Component } from "react";
import "./login.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from '../../api'
import memoryUtil from '../../utils/memory'
export default class Login extends Component {

  onFinish = async (values) => {
    let res = await login(values.username, values.password)
    console.log(res.data.token)
    if(res.data.token){
      memoryUtil.token = res.data.token
      //跳转路由 不需要在回到当前页面
       this.props.history.replace('/')
    }
    console.log('Received values of form: ', values);
  };
  valid_func = (rule, value, callback) => {
    if (value.length > 12) {
      callback('密码长度不能大于12')
    }
    callback()
  }
  render() {
    return (
      <div className="login">
        <header className="login-header"></header>
        <section className="login-content">
          <div className="txt">用户登录</div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入用户名",
                }, {
                  min: 4, message: "不能少于4个字符"
                }, {
                  validator: this.valid_func
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}
