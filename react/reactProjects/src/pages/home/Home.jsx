import React, { Component, useRef } from 'react'
import { Carousel } from 'antd';
import './Home.css'
import imgURL1 from './images/home-atomization.png';
import imgURL2 from './images/home-decoupling.png';
import imgURL3 from './images/home-access.png';
import imgURL4 from './images/home-common.png';
import imageUrl5 from './images/logo-white.png'
import imageUrl6 from './images/logo-black.png'

export default class Home extends Component {
  constructor(props){
    super(props)
    // this.cref = React.createRef();
    this.cref = null
  }
  state = {
    selectedKey: '',
    scrollStatus:true,
    selectdBannerIndex:0,
    timer:null,
  }
  enter = (key) => {
    console.log("aaa")
    this.setState({
      selectedKey: key
    })
  }
  outer = () => {
    console.log("xxxx")
    this.setState({
      selectedKey: ''
    })
  }
  //处理点击切换  避免点击下一个 表也刚好到时间切换下一个  这样直接切换了2个图  清掉表
  handleCarouselSlick = (index)=>{
    this.cref.goTo(index,false)
    this.setState({
      //设置被选择图片的下表
      selectdBannerIndex:index,
      // 清除表
      timer: clearInterval(this.state.timer)
    })
   
    // 重新计时 比如点了第三张 切换第四张要重新计时
    this.setState({
      timer:setInterval(this.change,3000)
    })
    
  }
  componentDidMount(){
    window.addEventListener('scroll',()=>{
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      console.log(scrollTop)
      if(scrollTop!==0){
         this.setState({scrollStatus:false})
      }else{
        this.setState({scrollStatus:true})
      }
    })
     // 自动切换
     this.setState({
      timer:setInterval(this.change,3000)
    })
  }
  change=()=>{
    // 不是最后一张
     if(this.state.selectdBannerIndex!==2){
        this.setState({
          selectdBannerIndex:this.state.selectdBannerIndex+1
        })
        this.cref.goTo(this.state.selectdBannerIndex,false)
     }else{
      this.cref.next();
      this.setState({
        selectdBannerIndex:0
      })
     }
  }
  render() {

    const featureList = [
      {
        itemKey: 'atomization',
        title: '融合-复用',
        content: '跨域融合、软件模块灵活重构，向下兼容异构OS、向上提供应用API，实现应用可移动、可插拔',
        itemUrl: imgURL1,
      },
      {
        itemKey: 'decoupling',
        title: '标准-开放',
        content: '云端和车端标准软件开发IDE环境，开放三方标准接口，车辆无缝连接IOT',
        itemUrl: imgURL2,
      },
      {
        itemKey: 'access',
        title: '个性化-定制化',
        content: '服务与软件灵活组合，实现可订阅式服务，满足千人千面的用户需求',
        itemUrl: imgURL3,
      },
      {
        itemKey: 'common',
        title: '共创-共建',
        content: '开发者平台共创，持续打造汽车专属应用生态',
        itemUrl: imgURL4,
      },
    ]
    // const backgroundurls = ['./images/home-1.png', './images/home-2.png', './images/home-3.png']
    // const banners = backgroundurls.map(item =>
    //   <div className='banner' style={{ backgroundImage: `url(` + { item } + ')' }}></div>)
    const list = featureList.map(item => <div className="mouse_item" onMouseEnter={() => this.enter(item.itemKey)}>
      <div className={this.state.selectedKey === item.itemKey ? 'mouse_image_hover flex_center' : 'mouse_image flex_center'}>
        <img src={item.itemUrl} alt="" />
      </div>
      <div class="feature-title flex_center">
        {item.title}
      </div>
      <div class="flex_center ">
        <div className='feature-content'>
          {item.content}
        </div>

      </div>
    </div>)
    return <div className='home'>
              <div className="h" style={this.state.scrollStatus?{backgroundColor:'rgba(220,38,38,0.0)',color:'#fff'}:{backgroundColor:'#fff',color:'black'}}>
                  <div className='div1'><img src={this.state.scrollStatus?imageUrl5:imageUrl6} alt=""/></div>
                  <div className='div2'>首页</div>
                  <div className='div3'>Z-ONE生态</div>
                  <div className='div4'>资源中心</div>
                  <div className='div5'>开发者大会</div>
                  <div className='div6'>控制台</div>
                  <div className='div7'>登陆/注册</div>
              </div>
              <div className='carouselAndDots'>
                <Carousel autoplay={false} dots={false} ref={(el)=>{this.cref=el}}>
                    <div className='banner_image1'></div>
                    <div className='banner_image2'></div>
                    <div className='banner_image3'></div>
                  </Carousel>
                  <div className="dots"> 
                    {
                      [1,2,3].map((_, index) => <div className="dot_item" style={this.state.selectdBannerIndex===index?{backgroundColor:'black'}:{backgroundColor:'#fff'}} onClick={()=>{this.handleCarouselSlick(index)}}></div>)
                    }
                  </div>
              </div>
      <div className="mouse" onMouseLeave={this.outer}>
        {list}
      </div>
    
    </div>

  }

}