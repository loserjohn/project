import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import Swiper from 'react-native-swiper';
import globalCss from '../utils/globalStyle.js'
// 组件

import Blank from '../components/blank';
import ListItem from '../components/ListItem';
import MediaItem from '../components/MediaItem';
import Search from '../components/Search';
//  图标
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// 主要菜单按钮部分
class Menus extends Component {
  constructor(props) {
    super(props)
    // this.state
  }
  // 同步回传值
  syncVal(e) {
    console.log(e);
  }
  render() {
    return (
      <View style={styles.menuBox}>
        <View style={globalCss.row}>
          <TouchableOpacity style={[styles.menuBar, globalCss.row, globalCss.bdRight]}>
            <Image source={require('../../static/img/tab1/m1.png')} style={{ width: 24, height: 24, resizeMode: 'cover' }}></Image>
            <Text style={styles.menuText}>手机下载必备</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuBar, globalCss.row, globalCss.bdRight]}>
            <Image source={require('../../static/img/tab1/m2.png')} style={{ width: 24, height: 24, resizeMode: 'cover' }}></Image>
            <Text style={styles.menuText}>新品新鲜出炉</Text>
          </TouchableOpacity>
        </View>
        <View style={globalCss.row}>
          <TouchableOpacity style={[styles.menuBar, globalCss.row, globalCss.bdRight]}>
            <Image source={require('../../static/img/tab1/m3.png')} style={{ width: 24, height: 24, resizeMode: 'cover' }}></Image>
            <Text style={styles.menuText}>APP应用分类</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuBar, globalCss.row, globalCss.bdRight]}>
            <Image source={require('../../static/img/tab1/m4.png')} style={{ width: 24, height: 24, resizeMode: 'cover' }}></Image>
            <Text style={styles.menuText}>APP应用专题</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// 列表快
class ListBox extends Component {
  constructor(props) {
    super(props)
    // this.state
    // console.log(this.props.count)
    this.state = {
      list: this.props.list ? this.props.list : []
    }
    // console.log(111,this.state.list)
  }
  // 同步回传值
  syncVal(e) {
    console.log(e);
  }
  render() {
    const items = this.state.list.map((item, index) => {
      return <ListItem last={index == this.state.list.length - 1} key={index}></ListItem>
    })
    return (
      <View style={styles.menuBox}>
        {items}
      </View>
    )
  }
}
// 抢先市场
class Market extends Component {
  constructor(props) {
    super(props)
    // this.state
    this.state = {
      list: this.props.list ? this.props.list : [] 
    }
  }
  // 同步回传值
  syncVal(e) {
    console.log(e);
  }
  render() {
    const list = this.state.list.map((item, index) => {
      return <MediaItem last={index == this.state.list.length - 1} key={index}></MediaItem>
    })
    return (
      <View style={{}}>
        <View style={styles.markBox}>
          <Image source={require('../../static/img/tab1/tip.png')} style={{ width: 12, height: 12, resizeMode: 'cover' }}></Image> 
          <Text style={{ color: '#06baff', flex: 1, fontSize: 14, marginLeft: 5 }}>抢先市场</Text>
          <TouchableOpacity><Text>查看更多 <FontAwesome name={'angle-right'} size={16} color="#999"></FontAwesome></Text></TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={styles.markContent} showsHorizontalScrollIndicator={false}>
          <View style={styles.content}>
            {list}
          </View>
        </ScrollView>

      </View>
    )
  }
}

// 极光奖
class Panel extends Component {
  constructor(props) {
    super(props)
    // this.state
    this.state = {
      list: this.props.list ? this.props.list : []
    }
  }
  // 同步回传值
  syncVal(e) {
    console.log(e);
  }
  render() {
    const list = this.state.list.map((item, index) => {
      return <MediaItem last={index == this.state.list.length - 1}></MediaItem>
    })
    return (
      <View style={styles.panelBox}>
        <ImageBackground source={require('../../static/img/tab1/panel.png')} style={{ width: '100%', height: '100%' }}>
          <View style={styles.panelContent}>
            <TouchableOpacity style={styles.panelItem}>
              <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553147397296&di=f3b52d8a725a918c423e5af1b909cd9f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb8d0b451dbd89c5905ba027402796b6dba01c1fd230d4-M7oKGn_fw658') }} style={styles.prePic}></Image>
              <Text style={styles.title}>被窝声次元</Text>
              <Image source={require('../../static/img/down.png')} style={{ width: 25, height: 25, resizeMode: 'cover' }}></Image>
              <Text style={styles.panelTip}>应用</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelItem}>
              <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553147397296&di=f3b52d8a725a918c423e5af1b909cd9f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb8d0b451dbd89c5905ba027402796b6dba01c1fd230d4-M7oKGn_fw658') }} style={styles.prePic}></Image>
              <Text style={styles.title}>迷途</Text>
              <Image source={require('../../static/img/down.png')} style={{ width: 25, height: 25, resizeMode: 'cover' }}></Image>
              <Text style={styles.panelTip}>游戏</Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
        <TouchableOpacity style={styles.panelMore}>
          <Text style={styles.panelText}>查看更多 <FontAwesome name={'angle-right'} size={16} color="#fff" ></FontAwesome></Text>
        </TouchableOpacity>
      </View>
    )
  }
}


// 主要部分
export default class Tab1 extends Component {
  constructor(props) {
    super(props)
    this.state={
      // opacity:0
    }
  }
  componentWillMount() {
   
  }
  // 滚动监听
  _scroll=(e)=>{
    // console.log(e.nativeEvent.contentOffset.y);
    let distY = e.nativeEvent.contentOffset.y;
    this.navSearch.test(distY);
  
  }
  render() {
    const dots = () => {
      return (
        <View style={styles.dots}></View>
      )
    }
    const activeDots = () => {
      return (
        <View style={styles.activeDots}></View>
      )
    }
    return <View style={{ flex: 1, position: 'relative' }}>

      <ScrollView style={styles.viewPager} showsVerticalScrollIndicator={false} onScroll={this._scroll}>
        <View style={styles.wrapper}> 
          <Swiper
            showsButtons={false}
            loop={true}
            dot={dots()}
            activeDot={activeDots()}
            autoplay={true}
            paginationStyle={styles.paginationStyle}
          >
            <View style={styles.slide1}>
              <Image source={require('../../static/img/tab1/banner.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }}></Image>
            </View>
            <View style={styles.slide2}>
              <Image source={require('../../static/img/tab1/banner.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }}></Image>
            </View>
          </Swiper>
        </View>
        <Blank ></Blank>
        <Menus></Menus>
        <Blank ></Blank>
        <ListBox list={[1, 1, 1]}></ListBox>
        <Blank ></Blank>
        {/* 抢先市场 */}
        <Market list={[1, 1, 1, 1, 1, 1]}></Market>
        <Blank ></Blank>
        <ListBox list={[1, 1, 1, 1]}></ListBox>
        <Blank ></Blank>
        {/* 极光奖 */}
        <Panel></Panel>
        <Blank ></Blank>
        <ListBox list={[1, 1, 1, 1]}></ListBox>

      </ScrollView>
      <Search style={globalCss.block} transparent={true}  fix={true} ref={component => this.navSearch = component} ></Search> 
    </View>

  }

}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden'
  },
  wrapper: {
    width: '100%',
    height: 200,
    position: 'relative'
  },
  dots: {
    width: 9,
    height: 9,
    backgroundColor: '#fff',
    opacity: .4,
    borderRadius: 6,
    marginHorizontal: 6
  },
  activeDots: {
    width: 11,
    height: 11,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginHorizontal: 6
  },
  paginationStyle: {
    bottom: 10,
    right: 0,
    // backgroundColor:'red',
    justifyContent: 'flex-end'
  },

  menuBar: {
    flex: 1,
    height: 36,
    lineHeight: 36,
    fontSize: 14,
    color: "#999",
    flexDirection: 'row',
    alignItems: "center",
    borderBottomWidth: .5,
    borderColor: '#ededed',
    paddingHorizontal: 10,

  },
  menuText: {
    paddingLeft: 10,
    color: '#999',
    fontSize: 14
  },
  markBox: {
    height: 33,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: .5,
    borderColor: '#ededed',
  },
  markContent: {
    width: '100%',
    height: 105,
    paddingVertical: 10,
    borderColor: '#ededed',
    borderBottomWidth: .5
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  panelBox: {
    width: '100%',
    height: 150,
    position: 'relative'
  },
  panelContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  panelItem: {
    width: 80,
    height: 123,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginLeft: 11,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  panelTip: {
    width: '100%',
    height: 22,
    backgroundColor: '#ff4341',
    position: 'absolute',
    left: -20,
    top: 10,
    // rotation:-45,
    transform: [{ rotate: '-45deg' }],
    color: '#fff',
    textAlign: 'center'
  },
  panelMore: {
    position: 'absolute',
    left: 26,
    bottom: 27,
    width: 79,
    height: 24,
    borderRadius: 2,
    borderWidth: .5,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelText: {
    textAlign: 'center',
    color: '#fff',
    lineHeight: 23
  },
  prePic: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 4
  },
  title: {
    lineHeight: 25
  }
});