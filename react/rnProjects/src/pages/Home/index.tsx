import React from 'react'
import { Button, Text, View,ScrollView ,FlatList, ListRenderItem, ListRenderItemInfo, StyleSheet} from 'react-native'
import { RootStackNavigation } from '../../navigator';
import {connect, ConnectedProps, useDispatch} from 'react-redux'
import { RootState } from '../../models';
import Carousel from './Carousel';
import Guess from './Guess';
import ChannelItem  from './ChannelItem';
import { IChannel } from '../../models/home';


const mapStateToProps=({home,loading}:RootState)=>({
    carousels:home.carousels,
    channels:home.channels,
    loading:loading.effects['home/fetchChannel'],
    hasMore:home.pagination.hasMore
})
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>

interface Iprops extends ModelState{
   navigation:RootStackNavigation
}
interface IState{
    refreshing:boolean
}

class Home extends React.Component<Iprops,IState>{
    state={
        refreshing:false
    }
    componentDidMount(){
        const {dispatch} = this.props
        dispatch({
            type:'home/fetchCarousel',
        })
        dispatch({
            type:'home/fetchChannel',
        })
    }
    onPress = (data:IChannel)=>{
       
    }
    // onPress =()=>{
    //     const {navigation} = this.props
    //     navigation.navigate("Detail",{id:100})
    // }
    
    // handleAdd =()=>{
    //     const {dispatch} = this.props
    //     dispatch({
    //         type:'home/add',
    //         payload:{
    //             num:10
    //         }
    //     })
    // }
    // asyncAdd=()=>{
    //     const {dispatch} = this.props
    //     dispatch({
    //         type:'home/asyncAdd',
    //         payload:{
    //             num:2
    //         }
    //     })
    // }
    key =(item:IChannel)=>{
        return item.id
    }
    //下拉刷新
    onFresh = ()=>{
        const {dispatch} = this.props
       //修改刷新状态
        this.setState({
            refreshing:true
        })
       //获取数据
        dispatch({
            type:'home/fetchChannel',
            callback:()=>{
                this.setState({
                    refreshing:false
                })
            }
        })
       //修改刷新状态
    //    this.setState({
    //     refreshing:false
    // })
    }
    //下拉到一定程度加载更多
    onEndReached = ()=>{
        const {dispatch,loading,hasMore} = this.props
        if(loading||!hasMore){
           return
        }
       //获取数据
        dispatch({
            type:'home/fetchChannel',
            payload:{
                loadMore:true
            }
        })
    }
    renderItem = ({item}:ListRenderItemInfo<IChannel>)=>{
        return (
           <ChannelItem data={item} onPress={this.onPress}/>
        )
    }
    get header(){
       
        return (
            <View>
                <Carousel />
                <Guess />
            </View>
        )
    }
    get footer(){
        const {hasMore,loading,channels} = this.props
        if(!hasMore){
            return (
                <View style={styles.end}>
                    <Text>我是有点底线的</Text>
                </View>
            )
        }
        if(loading&&hasMore&&channels.length>0){
            return(
                <View style={styles.loading}>
                    <Text>正在加载中</Text>
                </View>
            )
        }
    }
    get empty(){
        const {loading} = this.props
        if(loading){
            return
        }
       return(
           <View style={styles.empty}><Text>暂无数据～～</Text></View>
       )
       
    }
    render(){
        const {carousels,loading,channels} = this.props
        const {refreshing} = this.state
        return(
            <FlatList 
            ListEmptyComponent={this.empty}
            ListFooterComponent={this.footer}
            ListHeaderComponent={this.header} data={channels} renderItem={this.renderItem} 
            keyExtractor={this.key}
            refreshing={refreshing}
            onRefresh={this.onFresh}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.2}
            />
        )
        // <ScrollView>
                {/* <Text>
                    Home{carousels}
                </Text> */}
                {/* <Text>
                    {loading?'努力加载中':'计算完成'}
                </Text> */}
                {/* <Carousel data={carousels}/>
                <Guess /> */}
               
                {/* <Button title='加' onPress={this.handleAdd}></Button>
                <Button title='异步加' onPress={this.asyncAdd}></Button>
                <Button title="跳转详情页" onPress={this.onPress}></Button> */}
            // </ScrollView>
    }
}
const styles =StyleSheet.create({
    end:{
      alignItems:'center',
      paddingVertical:10
    },
    loading:{
      alignItems:'center',
      paddingVertical:10
    },
    empty:{
        alignItems:'center',
        paddingVertical:100
    }
})
export default connector(Home);