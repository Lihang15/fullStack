import React from 'react'
import { StyleSheet,Image, View} from 'react-native'
import SnapCarousel,{ AdditionalParallaxProps,Pagination,ParallaxImage} from 'react-native-snap-carousel'
import { viewportWidth, wp,hp } from '../../utils/'
import { ICarousel } from '../../models/home'
import { RootState } from '../../models';
import {connect, ConnectedProps, useDispatch} from 'react-redux'
import { RootStackNavigation } from '../../navigator';

// const data = [
//     'https://img2.baidu.com/it/u=1267931373,3662510004&fm=26&fmt=auto&gp=0.jpg',
//     'https://img2.baidu.com/it/u=2636384542,2342846786&fm=26&fmt=auto&gp=0.jpg',
//     'https://img0.baidu.com/it/u=1397939527,1839889565&fm=26&fmt=auto&gp=0.jpg',
//     'https://img1.baidu.com/it/u=1677923055,2984930156&fm=224&fmt=auto&gp=0.jpg',
//     'https://img1.baidu.com/it/u=3266479433,1999627905&fm=26&fmt=auto&gp=0.jpg',
//     'https://img2.baidu.com/it/u=111713540,615806613&fm=26&fmt=auto&gp=0.jpg'
// ]

const mapStateToProps=({home}:RootState)=>{return {
    data:home.carousels,
    activeCarouselIndex:home.activeCarouselIndex
}
}
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>

interface Iprops extends ModelState{
   
}

const sliderWidth = viewportWidth
const sidewidth = wp(90)
const sideheight = hp(26)
const itemWidth = sidewidth +wp(2)*2
class Carousel extends React.Component<Iprops>{

    renderItem =({item}:{item:ICarousel},parallaxProps?:AdditionalParallaxProps)=>{
        return <Image source={{uri:item.image}} style={styles.image}/>
    }
    onSnapToItem=(index:number)=>{
         const {dispatch} =this.props
         dispatch({
             type:'home/setState',
             payload:{
                 activeCarouselIndex:index
             }
         })
    }
    get pagination(){
        const {data,activeCarouselIndex} = this.props
        return (
            <View style={styles.paginationWrapper}>
                <Pagination 
                containerStyle={styles.paginationContainer}
                dotContainerStyle={styles.dotContainer}
                dotStyle={styles.dot}
                activeDotIndex={activeCarouselIndex} 
                dotsLength={data.length}/>
            </View>
        )
    }
    render(){
        const {data} = this.props
        return(
            <View>
                <SnapCarousel 
                data={data} 
                renderItem={this.renderItem} sliderWidth={sliderWidth} 
                itemWidth={itemWidth} loop autoplay onSnapToItem={this.onSnapToItem}/>

                {this.pagination}

            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    image:{
        width:itemWidth,
        height:sideheight,
        borderRadius:8,
    },
    paginationWrapper:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:8
    },
    paginationContainer:{
        position:'absolute',
        top:-20,
        paddingHorizontal:3,
        paddingVertical:4,
        borderRadius:8
    },
    dotContainer:{
        marginHorizontal:6
    },
    dot:{
        width:6,
        height:6,
        borderRadius:3,
        backgroundColor:'rgba(255,255,255,0.92)'
    }
})
export default connector(Carousel) 