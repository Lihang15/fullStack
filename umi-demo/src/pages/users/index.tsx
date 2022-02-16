

import { Table, Tag, Space,Pagination} from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import UserModal from '../../component/UserModel'
import { connect } from 'umi'
import {UserState} from '../../models/userModel'
import React,{useState,FC} from 'react'
import { getRemoteList,editUser } from '../../services/userService'

// interface UserProps{
//     users:UserState
//     dispatch:Dispatch
// }
const User= (props)=>{

    const {users,userListLoading,dispatch} = props
    const [modalVisible,setModalVisible] = useState(false)
    const [record,setRecord] = useState(undefined)
    const handleOk = () => {
        setModalVisible(false);
      };
    
      const handleCancel = () => {
        setModalVisible(false);
      };

      const onFinish = async (values)=>{
        const id = record.id
        // dispatch({type:'users/edit',payload:{values,id}})
       const {code} = await editUser({values,id})
        if(code===200){
          dispatch({type:'users/getRemote',payload:{page_no:1,page_size:10}})
          setModalVisible(false);
        }
        // setModalVisible(false);
        
    }
    const pagenoHandler = (pageno,pagesize)=>{
      dispatch({type:'users/getRemote',payload:{page_no:pageno,page_size:pagesize}})
    }
    const pagesizeHandler = (pageno,pagesize)=>{
      dispatch({type:'users/getRemote',payload:{page_no:pageno,page_size:pagesize}})
    }
    // const requestHandler = async({pageSize,current})=>{
    //   const users =await getRemoteList({page_no:current,page_size:pageSize})
    //   return {
    //     data:users.data.dataList,
    //     success:true,
    //     total:users.data.count
    //   }
    // }
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
       
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a onClick={()=>{
                //   setRecord(record)
                  setModalVisible(true)
                  setRecord(record)}}>edit</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      
      

    return (<div className='list-table'>
            <ProTable pagination={false}  columns={columns} dataSource={users.dataList} rowKey={record => record.id} loading={userListLoading}/>
            <Pagination showSizeChanger showQuickJumper onChange={pagenoHandler} onShowSizeChange={pagesizeHandler} style={{marginLeft:300}} total={users.count}/>
            <UserModal isEdit={modalVisible} handleOk={handleOk} handleCancel={handleCancel} record={record} onFinish={onFinish}/>
            </div>
            )
}

const mapStateToProps = ({users,loading})=>{
    console.log(users)
     return {users,userListLoading:loading.models.users}
}
export default connect(mapStateToProps)(User)