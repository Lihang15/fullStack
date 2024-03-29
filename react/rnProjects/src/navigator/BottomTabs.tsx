import React from 'react'
import {TabNavigationState,RouteProp,getFocusedRouteNameFromRoute} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeTabs from './HomeTabs'
import Listen from '../pages/Listen'
import Found from '../pages/Found'
import Account from '../pages/Account'
import Icon from '../assets/iconfont'
import { RootStackNavigation, RootStackParamList } from '.'

export type BottomTabParamList={
    HomeTabs:undefined,
    Listen:undefined;
    Found:undefined;
    Account:undefined;
}
const Tab = createBottomTabNavigator<BottomTabParamList>()

type Route = RouteProp<RootStackParamList,'BottomTabs'>&{
    // state?:TabNavigationState<BottomTabParamList>
}

interface IProps{
    navigation:RootStackNavigation;
    route:Route
}
class BottomTabs extends React.Component<IProps>{
    getHeaderTitle=(route:Route)=>{
        const routeName = getFocusedRouteNameFromRoute(route)??'HomeTabs';
        switch(routeName){
            case 'HomeTabs':
                return '首页'
            case 'Listen':
                return '我听'
            case 'Found':
                return '发现'
            case 'Account':
                return '账户'
            default:
                return '首页'
        }
    }
    componentDidMount(){
        this.setOptions()
    }
    componentDidUpdate(){
       this.setOptions()
    }
    setOptions =()=>{
        const {navigation,route} = this.props
        const routeName = getFocusedRouteNameFromRoute(route)??'HomeTabs';
        if(routeName==='HomeTabs'){
            navigation.setOptions({
                // headerTitle:this.getHeaderTitle(route),
                headerTitle:'',
                headerTransparent:true,
                
            })
        }else{
            navigation.setOptions({
                headerTitle:this.getHeaderTitle(route),
                headerTransparent:false,
            })
        }  
    }
    render(){
        return(
            // <NavigationContainer>
                <Tab.Navigator tabBarOptions={{activeTintColor:'#f86442'}}>
                    <Tab.Screen name='HomeTabs' component={HomeTabs} options={{tabBarLabel:'首页',tabBarIcon:({color,size})=>(
                        <Icon name="icon-biaoqiankuozhan_shouye-151" color={color} size={size}/>
                    )
                    }} />
                    <Tab.Screen name='Listen' component={Listen} options={{tabBarLabel:'我听',tabBarIcon:({color,size})=>(
                        <Icon name="icon-shoucang" color={color} size={size}/>
                    )}} />
                    <Tab.Screen name='Found' component={Found} options={{tabBarLabel:'发现',tabBarIcon:({color,size})=>(
                        <Icon name="icon-faxian" color={color} size={size}/>
                    )}} />
                    <Tab.Screen name='Account' component={Account} options={{tabBarLabel:'我的',tabBarIcon:({color,size})=>(
                        <Icon name="icon-wode" color={color} size={size}/>
                    )}} />
                </Tab.Navigator>
            // </NavigationContainer>
        )
    }
}
export default BottomTabs
