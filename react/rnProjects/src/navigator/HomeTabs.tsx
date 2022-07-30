import React from 'react'
import {createMaterialTopTabNavigator, MaterialTopTabBar,MaterialTopTabBarProps} from '@react-navigation/material-top-tabs'
import Home from '../pages/Home'
import { StyleSheet, View } from 'react-native'
import TopTabBarWrapper from '../pages/views/TopTabBarWrapper'

const Tab = createMaterialTopTabNavigator()

class HomeTabs extends React.Component{
    //自定义顶部菜单拦
    renderTabBar = (props:MaterialTopTabBarProps)=>{
        return (<TopTabBarWrapper {...props}/>)
    }
    render(){
        return(
            <Tab.Navigator
                lazy={true}
                sceneContainerStyle={styles.sceneContainer}
                tabBar={this.renderTabBar}
                tabBarOptions={{scrollEnable:true,tabStyle:{width:80},
                indicatorStyle:{
                    height:4,
                    width:20,
                    marginLeft:30,
                    borderRadius:2,
                    backgroundColor:'#f86442'
                },
                activeTintColor:'#f86442',
                inactiveTintColor:'#333'
            }}
            >
                <Tab.Screen name='Home' component={Home} options={{tabBarLabel:'推荐'}}/>
                <Tab.Screen name='Vip' component={Home}/>
            </Tab.Navigator>
        )
    }
}
const styles = StyleSheet.create({
    sceneContainer:{
        backgroundColor:'transparent'
    }
})
export default HomeTabs