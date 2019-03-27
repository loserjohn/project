/*
 * @Author: han.xiao 
 * @Date: 2019-03-25 10:41:37 
 * @Last Modified by: han.xiao
 * @Last Modified time: 2019-03-25 11:47:28
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import globalCss from '../utils/globalStyle.js'
import ClassItem from '../components/ClassItem';
import NavBar from '../components/NavBar';

//  图标
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// 星级
class StarLevel extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() { }
  render() {
    return (
      <View style={[globalCss.row, { marginVertical: 6 }]}>
        <FontAwesome name={'star'} size={16} color="#FDCF38"></FontAwesome>
        <FontAwesome name={'star'} size={16} color="#FDCF38"></FontAwesome>
        <FontAwesome name={'star'} size={16} color="#FDCF38"></FontAwesome>
        <FontAwesome name={'star-half-empty'} size={16} color="#FDCF38"></FontAwesome>
        <FontAwesome name={'star-o'} size={16} color="#FDCF38"></FontAwesome>
      </View>
    )
  }
}

// app基本信息部分
class AppMsg extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() { }
  render() {
    return (
      <View style={AppMsgCss.viewPager}>
        <View style={AppMsgCss.content}>
          <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553147397296&di=f3b52d8a725a918c423e5af1b909cd9f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb8d0b451dbd89c5905ba027402796b6dba01c1fd230d4-M7oKGn_fw658') }} style={{ width: 65, height: 65, resizeMode: 'cover', borderRadius: 8, marginRight: 10 }}></Image>
          <View style={AppMsgCss.textBox}>
            <View>
              <Text><Text style={globalCss.title}>聘聘-蓝领招聘</Text> <Text style={AppMsgCss.mark}>官方</Text></Text>
              <View style={globalCss.row}>
                <StarLevel></StarLevel>
                <Text style={globalCss.text}>4.4分</Text>
              </View>
              <Text style={globalCss.text}>21.78MB 已下载185万次</Text>
            </View>
          </View>
          <TouchableOpacity style={{ marginHorizontal: 15 }}>
            <Image source={require('../../static/img/down.png')} style={{ width: 25, height: 25, resizeMode: 'cover' }}></Image>
          </TouchableOpacity>
        </View>
        <View style={[globalCss.row, { alignItems: 'center' }]}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={AppMsgCss.marks}>
              <Image source={require('../../static/img/icon1.png')} style={{ width: 13, height: 13, resizeMode: 'cover' }}></Image>
              <Text style={AppMsgCss.text}>安全</Text>
            </View>
            <View style={AppMsgCss.marks}>
              <Image source={require('../../static/img/icon2.png')} style={{ width: 13, height: 13, resizeMode: 'cover' }}></Image>
              <Text style={AppMsgCss.text}>含广告</Text>
            </View>
          </View>
          <FontAwesome name={'angle-down'} size={20} color="#999" style={{ alignSelf: 'flex-end' }}></FontAwesome>
        </View>
      </View>
    )
  }
}
const AppMsgCss = StyleSheet.create({
  viewPager: {
    width: '100%',
    height: 123,
    borderBottomWidth: .5,
    borderColor: "#ededed",
    padding: 10,

  },
  content: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  textBox: {
    flex: 1,

  },
  mark: {
    borderLeftColor: '#49CE5B',
    borderWidth: .5,
    color: '#49CE5B',
    fontSize: 8,
    paddingHorizontal: 3,
    height: 15
  },
  text: {
    fontSize: 12,
    color: '#9b9b9b',
    lineHeight: 13,
    marginLeft: 5
  },
  marks: {
    marginRight: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  }
});

// 主要部分
export default class detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      currentType: this.props.type,
      active: 0
    }
  }
  componentWillMount() {


  }
  // 加载更多
  loadMore = () => {
    console.log('加载更多')
  }
  // 刷新
  refresh = () => {
    console.log('刷新')
  }
  // 右边多贡嗯按钮
  _rightNavBtn() {
    return (<View style={globalCss.row}>
      <View style={styles.rightBtn}>
        <AntDesign name={'search1'} size={18} color="#fff"></AntDesign>
      </View>
      <View style={styles.rightBtn}>
        <MaterialCommunityIcons name={'arrow-collapse-down'} size={18} color="#fff"></MaterialCommunityIcons>
      </View>
      <View style={styles.rightBtn}>
        <AntDesign name={'sharealt'} size={18} color="#fff"></AntDesign>
      </View>
    </View>)
  }
  // 渲染选项卡内容
  renderTab() {
    if (this.state.active == 0) {
      // 详情v部分
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.scrollContent} >
            <ScrollView horizontal={true} style={{ width: '100%', height: 230 }} showsHorizontalScrollIndicator={false}>
              <View style={{ paddingVertical: 10, paddingLeft: 10, flexDirection: 'row' }}>
                <View style={styles.preImgs}>
                  <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553597413902&di=c84c20a9cc2d0a88804307412586b97a&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fimges%2F2019%2F0322%2F20190322092454805.jpg') }} style={{ width: '100%', height: 210 }}></Image>
                </View>
                <View style={styles.preImgs}>
                  <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553597401819&di=4e6c3e39bd1d2d218c7f238bd427ecf5&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fimges%2F2019%2F0224%2F20190224093618959.jpg') }} style={{ width: '100%', height: 210 }}></Image>
                </View>
                <View style={styles.preImgs}>
                  <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553597401818&di=9526866ca66952226cf8da2b027194ed&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fimges%2F2019%2F0315%2F20190315010656259.jpg') }} style={{ width: '100%', height: 210 }}></Image>
                </View>
                <View style={styles.preImgs}>
                  <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553597401818&di=c34c5d4aa31e1d38ca5aa7f06ac5db7f&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fimges%2F2019%2F0130%2F20190130054149713.jpg') }} style={{ width: '100%', height: 210 }}></Image>
                </View>
                <View style={styles.preImgs}>
                  <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553597401814&di=bd5da05a36cfc33859cea9a17b7109c5&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fimges%2F2019%2F0215%2F20190215085058925.jpg') }} style={{ width: '100%', height: 210 }}></Image>
                </View>
              </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 15, paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 12 }}>版本：4.4.0</Text>
              <Text style={{ fontSize: 12 }}>更新时间：2015-12-30</Text>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={[styles.product, globalCss.title]}>应用介绍</Text>
            <Text style={styles.text}>斯大林福建客家但是看了发掘了多少JFK楼上的加斯大林福建客家但是看了发掘了多少JFK楼上的加快了飞机迪斯科发酵饲料看到发斯大林福建客家但是看了发掘了多少JFK楼上的加快了飞机迪斯科发酵饲料看到发斯大林福建客家但是看了发掘了多少JFK楼上的加快了飞机迪斯科发酵饲料看到发快了飞机迪斯科发酵饲料看到发</Text>
          </View>
        </View>


      )
    } else {
      // 评论部分
      const lists = [1,12,2,3,4].map(item=>this.renderItems())
      return (
        <ScrollView style={{ flex: 1, padding: 10 }}>
          <View style={styles.commentBox}>
              {lists}
          </View>
        </ScrollView>)
    }
  }
  // 列表
  renderItems(){
    return (
      <View style={[globalCss.row,{paddingTop:10}]}>
      <Image style={styles.userAvatar} source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554010897&di=fcb0d4e00252884a41e3486836163267&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fdce6737ed4c91618cb6749f12aae38a56e03f41d34b49-G7iSIP_fw658') }}></Image>
      <View style={styles.commontContent}>
        <Text style={globalCss.title}>旺旺小小酥</Text>
        <View style={[globalCss.row,{marginVertical:7,alignItems:'center'}]}>
          <ImageBackground style={{ width: 30, height: 12,borderRadius:3 }} source={require('../../static/img/b.png')} >
            <Text style={{ color: '#fff',textAlign:'right',fontSize:12 }}>20 </Text>
          </ImageBackground>
          <Text style={globalCss.text}> 04.23  7:23</Text>
        </View>
        <Text style={[globalCss.bdBottom,{lineHeight:26,paddingBottom:10}]}>撒打发回家看到回复可见环境宽松的合法可就是的环境是大家看法和是大家宽容贫民窟里的经常v公开三空间看到了法国进口看将考虑对方就看见</Text>
      </View>           
    </View>
    )
  }
  // 同步信息
  syncVal(){

  }
  // 底部的按钮
  renderBottom(){
    if (this.state.active == 0) {
      return(
        <View style={styles.BottomBar}>
           <TouchableOpacity ><Text style={styles.downLoad}>下载</Text></TouchableOpacity>       
        </View>
        
      )
    }else{
        return (
          <View style={[styles.BottomBar,globalCss.row]}>
            <TextInput
              clearButtonMode='always'
              onChangeText={this.syncVal()}
              placeholder='请输入评论内容'
              style={styles.commentInput}
            ></TextInput>
             <TouchableOpacity style={[styles.sendBtn]}> 
                  <Image style={{ width: 21, height: 21 }} source={require('../../static/img/send.png')} ></Image>
             </TouchableOpacity>
          </View>
        )
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavBar hideContent={true} rightButton={this._rightNavBtn} navigation={this.props.navigation} ></NavBar>
        <View style={{ flex: 1 }}>
          <AppMsg></AppMsg>
          <View style={{ flex: 1 }}>
            <View style={styles.tabBarTitle}>
              <TouchableOpacity onPress={() => { this.setState({ active: 0 }) }} style={[styles.tabs, { borderBottomWidth: this.state.active == 0 ? 2 : 0 }]}>
                <Text style={[styles.text, { color: this.state.active == 0 ? globalCss.c_primary : globalCss.c_text }]}>详情</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.setState({ active: 1 }) }} style={[styles.tabs, { borderBottomWidth: this.state.active == 1 ? 2 : 0 }]}>
                <Text style={[styles.text, { color: this.state.active == 1 ? globalCss.c_primary : globalCss.c_text }]}>评论 (129万+)</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{}}>
              {this.renderTab()}
            </ScrollView>
          </View>
        </View>
        {this.renderBottom()}       
        
      </View>
    )
  }

}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    // backgroundColor: '#00ff00',
  },
  rightBtn: {
    width: Platform.OS == 'IOS' ? globalCss.navBar_ios : globalCss.navBar_android,
    height: Platform.OS == 'IOS' ? globalCss.navBar_ios : globalCss.navBar_android,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentBox: {

  },
  tabBarTitle: {
    width: '100%',
    height: 35,
    borderBottomWidth: .5,
    borderColor: "#ededed",
    paddingHorizontal: 23,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tabs: {
    height: 35,
    lineHeight: 35,
    paddingHorizontal: 20,
    borderBottomColor: globalCss.c_primary
  },
  text: {
    height: 35,
    lineHeight: 35,
    color: '#333',

  },
  scrollContent: {
    width: '100%',
    height: 255,
    paddingBottom: 10,
    backgroundColor: '#f4f4f4',
    overflow: 'hidden',
    borderBottomWidth: .5,
    borderColor: "#ededed",
  },
  preImgs: {
    width: 125,
    height: 210,
    // backgroundColor:''
    marginRight: 10,
    overflow: 'hidden',
    borderRadius: 8
  },
  BottomBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:10
  },
  product: {
    lineHeight: 34,
    width: '100%',
    borderBottomColor: '#ededed',
    borderBottomWidth: .5,
    alignItems: 'center'
  },
  text: {
    paddingVertical: 10,
    lineHeight: 20
  },
  downLoad: {
    width: 212,
    height: 30,
    borderRadius: 15,
    backgroundColor: globalCss.c_primary,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 16
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10
  },
  sendBtn:{
    width:35,
    height:35,
    borderRadius:4,
    backgroundColor:globalCss.c_primary,
    justifyContent:'center',
    alignItems:'center'
  },
  commentInput:{
    flex:1,
    marginRight:5,
    backgroundColor:'#fff',
    height:35,
    borderRadius:4
  }
});