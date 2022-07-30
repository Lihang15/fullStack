import React from 'react'
import {Button} from 'antd'
import ReactEcharts from 'echarts-for-react'

export default class Bar extends React.Component {
    state={
        data:[5, 20, 36, 10, 10, 20]
    }
    getOption = ()=>{
        return {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: this.state.data
            }]
        }
    }
    click=()=>{
        this.setState(state=>({
            data:state.data.map(v=>v+1)
        })
        )
    }
    render() {
        return (
            <div>
                <div><Button type='primary' onClick={this.click}>点我</Button></div>
                <ReactEcharts option={this.getOption()}></ReactEcharts>

            </div>
        )
    }


}