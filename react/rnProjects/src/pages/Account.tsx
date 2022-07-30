import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackNavigation } from '../navigator';

interface Iprops {
   navigation:RootStackNavigation
}
class Account extends React.Component<Iprops>{
    onPress =()=>{
        const {navigation} = this.props
        navigation.navigate("Detail",{id:100})
    }
    render(){
        return(
            <View>
                <Text>
                    Account
                </Text>
                <Button title="跳转详情页" onPress={this.onPress}></Button>
            </View>
        )
    }
}
export default Account;