import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import Touchable from '../../components/Touchable'
import LinearGradient  from 'react-native-linear-gradient';
import { RootState } from '../../models';
import {connect, ConnectedProps} from 'react-redux'

const mapStateToProps = ({home}:RootState)=>{return{
        linearColors:home.carousels?home.carousels[home.activeCarouselIndex].colors:undefined
    }
}
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>

type IProps = MaterialTopTabBarProps & ModelState

class TopTabBarWrapper extends React.Component<IProps> {
    get linearGradient(){
        const {linearColors = ['#ccc','#e2e2e2']} = this.props
        return(
            <LinearGradient colors={linearColors} style={styles.gradient}/>
        )
    }
  render() {
    const {props} = this;
    return (
      <View style={styles.container}>
          {this.linearGradient}
          <View style={styles.view}>
            <MaterialTopTabBar {...props} style={styles.tab}/>
            <Touchable style={styles.category}>
                <Text>分类</Text>
            </Touchable>
        </View>
        <View style={styles.bottom}>
            <Touchable style={styles.search}>
                <Text>搜索按钮</Text>
            </Touchable>
            <Touchable style={styles.history}>
                <Text>历史记录</Text>
            </Touchable>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        paddingTop:getStatusBarHeight(),
        backgroundColor:'#fff'
    },
    tab:{
        flex:1,
        elevation:0,
        overflow:'hidden',
        backgroundColor:'transparent'
    },
    topTabBarView:{

    },
    view:{
      flexDirection:'row',
      alignItems:'center'
    },
    category:{
        paddingHorizontal:10,
        borderLeftWidth:StyleSheet.hairlineWidth,
        borderLeftColor:'#ccc'
    },
    history:{
       marginLeft:24
    },
    search:{
        flex:1,
        paddingLeft:12,
        height:30,
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'rgba(0,0,0,0.1)'
    },
    bottom:{
      flexDirection:'row',
      paddingVertical:7,
      paddingHorizontal:15,
      alignItems:'center'
    },
    gradient:{
        ...StyleSheet.absoluteFillObject,
        height:260
    }
})
export default connector(TopTabBarWrapper);
