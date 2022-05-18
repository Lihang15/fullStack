import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../navigator';
import {RouteProp} from '@react-navigation/native'


interface IProps{
    route:RouteProp<RootStackParamList,'Detail'>
}

class Detail extends React.Component<IProps>{
    render(){
        const {route} = this.props
        return(
            <View>
                <Text>
                    Detail
                </Text>
                <Text>{route.params.id}</Text>
            </View>
        )
    }
}
export default Detail;