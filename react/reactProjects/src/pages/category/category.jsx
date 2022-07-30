import React from 'react'
import { Card, Table, Button } from 'antd';

export default class Category extends React.Component {
    render() {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'action',
                render: () => <a>Delete</a>,
                dataIndex: 'address',
                key: 'action',
            },
        ];

        const my_extra = (<Button type='primary'>添加</Button>)
        return (
            <Card title="我的卡片" extra={my_extra} style={{ width: '100%' }}>
                <Table dataSource={dataSource} columns={columns} />;
            </Card>



        )
    }


}