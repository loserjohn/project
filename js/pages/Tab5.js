import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import globalCss from '../utils/globalStyle.js'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';


// 四个功能列表
class List extends Component {
  constructor(props) {
    super(props)
    this.state={    
      update:{
        name:'应用更新',
        text:'一键清理释放更多空间',
        url:require('../../static/img/tab5/me1.png')
      },
      clear:{
        name:'一键清理',
        text:'一键清理释放更多空间',
        url:require('../../static/img/tab5/me2.png')
      },
      unInstall:{
        name:'应用卸载',
        text:'卸载已安装应用',
        url:require('../../static/img/tab5/me3.png')
      },
      move:{
        name:'应用搬家',
        text:'给软件搬家，释放系统空间',
        url:require('../../static/img/tab5/me4.png')
      },      
      current:{}
    }
    
  }
  static propTypes = {
    describe: PropTypes.func,
  }

  componentWillMount() { 
    this.setState({
      current:this.state[this.props.keytype]
    })

  }
  render() {
    const des = this.props.describe?this.props.describe():<Text style={globalCss.c_text} ellipsizeMode="tail" numberOfLines={1}>{this.state.current.text}</Text>
    return (
      <TouchableOpacity style={listCss.listBox}>
        <View style={listCss.listItems}>
          <Image style={globalCss.prePic} source={this.state.current.url}></Image>

          <View style={{ flex: 1 }}>
            <Text style={listCss.title}>{this.state.current.name}</Text>           
            {des}
          </View>
          <Text style={listCss.tip}>38</Text>
          <FontAwesome name={'angle-right'} size={26} color="#999" ></FontAwesome>
        </View>
      </TouchableOpacity>
    )
  }

}
const listCss = StyleSheet.create({
  listBox: {
    padding: 10,
    width: '100%',
    height: 71,
    // backgroundColor:'red'
  },
  listItems: {
    width: '100%',
    height: 71,
    borderBottomWidth: .5,
    borderColor: globalCss.c_line,
    flexDirection: 'row',
    alignItems:'center'
  },
  tip:{
    paddingHorizontal:4,
    height:18,
    lineHeight:20,
    borderRadius:8,
    backgroundColor:'red',
    color:'#fff' ,
    fontSize:10,
    marginRight:10
  },
  title:{
    color: '#333',
    fontWeight: 'bold',
    marginBottom:10
  }
})



// 主要部分
export default class Tab1 extends Component {
  constructor(props) {
    super(props)

  }
  componentWillMount() {


  }
  // 第一个的文字渲染
  _renderDes(){
    return (
      <View style={{flexDirection:'row'}}>
          <Image style={styles.miniPre} source={{uri:('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553431792937&di=8866e7966a2b6a4d3b033248601831d9&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6ce452ab2fbf57f0cb0ee974a19b8a996a9bc80915e60-41cSxl_fw658')}}></Image>
          <Image style={styles.miniPre} source={{uri:('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553431792937&di=3ed83339c1d60ce00a54fc65fc30f299&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01477f56ebf9166ac7257d204653ae.jpg')}}></Image>
          <Image style={styles.miniPre} source={{uri:('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553431792934&di=f6a888b2c0ebcd04f048d477f13e12ae&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff4d7b94595ca9e6d165576053aca64d85058ab2db37a-Dqwowl_fw658')}}></Image>
          <Text>3款软甲可以更新</Text>
      </View>
    )
  }
  // 右边按钮
  _rightNavBtn(){
    return (
      <View style={globalCss.center}>
        <Image source={require('../../static/img/下载.png')} style={{ width: 22, height: 22, resizeMode: 'cover'}}></Image>
      </View>
    )
  }
  // 左边返回按钮
  _leftNavBtn(){
    return (
      <View style={globalCss.center}>
        <Image source={require('../../static/img/tab5/set.png')} style={{ width: 22, height: 22, resizeMode: 'cover'}}></Image>
      </View>
    )
  }
  render() {

    return <View style={styles.viewPager}>

      <ImageBackground style={styles.userBox} source={require('../../static/img/tab5/bg.png')} >
        <View style={styles.circleBox}>
          <View style={styles.circle1}></View>
          <View style={styles.circle2}></View>
        </View>
        <Text style={styles.levelTip}>点击登陆个人账户</Text>
        <View style={styles.levelBox}>
          <View style={styles.levelBoxBg}></View>
          <Image source={require('../../static/img/tab5/vip.png')}></Image>
          <Text style={styles.levelText}>等级明细</Text>
        </View>
      </ImageBackground>
      <View>
        <List keytype="update" describe={this._renderDes}></List>
        <List keytype="clear"></List>
        <List keytype="unInstall"></List>
        <List keytype="move"></List>
      </View>
      <NavBar   quiet={true}  hideContent={true} leftButton={this._leftNavBtn} rightButton={this._rightNavBtn} ></NavBar> 
    </View>
  }

}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    // backgroundColor: '#00ff00',
    position:'relative'
  },
  userBox: {
    width: '100%',
    height: 266,
    // justifyContent:'center',
    alignItems: 'center'
  },
  circleBox: {
    width: 84,
    height: 84,
    position: 'relative',
    marginTop: 56
  },
  circle1: {
    width: 84,
    height: 84,
    position: 'relative',
    borderRadius: 42,
    backgroundColor: '#FFF',
    opacity: .2
  },
  circle2: {
    width: 72,
    height: 72,
    position: 'absolute',
    left: 6,
    top: 6,
    borderRadius: 36,
    backgroundColor: '#FFF',
    opacity: .3
  },
  levelBox: {
    width: 133,
    height: 26,
    borderRadius: 13,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelBoxBg: {
    width: 133,
    height: 26,
    borderRadius: 13,
    opacity: .4,
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0
  },
  levelTip: {
    color: '#fff',
    lineHeight: 30
  },
  levelText: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginLeft: 14
  },
  miniPre:{
    width:21,
    height:21,
    borderRadius:4,
    marginRight:5
  }
});