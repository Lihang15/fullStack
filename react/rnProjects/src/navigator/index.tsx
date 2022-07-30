import React from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator,HeaderStyleInterpolators,StackNavigationProp} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import BottomTabs from './BottomTabs'
import Detail from '../pages/Detail'



export type RootStackParamList={
    BottomTabs:{
            screen?:string
    }
    Detail:{
        id:number
    }
}
export type RootStackNavigation = StackNavigationProp<RootStackParamList>

let Stack = createStackNavigator<RootStackParamList>();

//路由导航器
class Navigator extends React.Component{
    render(){
        return(
         <NavigationContainer>
             <Stack.Navigator headerMode="float" screenOptions={{headerTitleAlign:'left',headerStyleInterpolator:HeaderStyleInterpolators.forUIKit}}>
                <Stack.Screen options={{headerTitle:'首页'}} name='BottomTabs' component={BottomTabs}/>
                <Stack.Screen options={{headerTitle:'详情'}} name='Detail' component={Detail} /> 
             </Stack.Navigator>
         </NavigationContainer>
        )
    }
}
export default Navigator;