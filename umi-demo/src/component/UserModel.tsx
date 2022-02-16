import React, { useState,useEffect } from 'react';
import { Modal, Button, Form, Input} from 'antd';

const UserModal = (props) => {
  const [form] =Form.useForm()
  useEffect(()=>{
    
    form.setFieldsValue(props.record)
  },[props.record])
 const onOk = ()=>{
    form.submit()
 }


 const onFinishFailed = (errorLog)=>{
     console.log('failed',errorLog)
 }
  return (
    <>
      <Modal title="Basic Modal" visible={props.isEdit} onOk={onOk} onCancel={props.handleCancel} forceRender>
          <Form
          name="basic"
          initialValues={props.record}
          form={form}
          onFinish={props.onFinish}
          onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="age"
              name="age"
              rules={[{ required: true, message: 'Please input your age!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="address"
              name="address"
              rules={[{ required: true, message: 'Please input your address!' }]}
            >
              <Input />
            </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal