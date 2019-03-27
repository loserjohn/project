import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  Platform
} from 'react-native';
import globalCss from '../utils/globalStyle.js'
import PropTypes from 'prop-types';


// 搜索的头部部分
export default class Search extends Component {
  constructor(props) {
    super(props)
    // console.log(props.opacity)
    this.state = {
      opacity: props.transparent ? 0 : 1,
    }
  }
  static propTypes = {
    // opacity: PropTypes.number,
  }
  componentWillReceiveProps(e){
    console.log(0,e)
  }
  
  // 同步回传值
  syncVal(e) {
    // console.log(e);
  }
  test(distY) {
    if(!this.props.transparent)return;
    
    if (distY >= 200) {

    } else {
      let opacity = (distY / 200).toFixed(1);
      // console.log(111, opacity);
      // this.setState({
      //   opacity:  Number(opacity)
      // })
      this.navbg.setNativeProps({   //这里输入你要修改的组件style
        style:{
          opacity:Number(opacity)   
        } 
      });
      // console.log(opacity )
    }

  }
  render() {
    // const bg = this.props.transparent? <View style={[styles.bg, {backgroundColor:'transparent'}]} ref={(c) => this.navbg = c}></View>: <View style={styles.bg} ref={(c) => this.navbg = c}></View>
    return (
      <View style={[styles.searchBox, { backgroundColor: this.props.transparent ? 'transparent' : globalCss.c_primary, position: this.props.fix ? 'absolute' : 'relative' }]}>
        <StatusBar
          // hidden={true}
          backgroundColor={'transparent'}
          translucent={true}
        ></StatusBar>
        <View style={styles.navBar}>
          <View style={styles.inputBox}>
            <View style={styles.scan}>
              <Image source={require('../../static/img/搜索.png')} style={{ width: 24, height: 24, resizeMode: 'cover' }}></Image>
            </View>
            <TextInput
              clearButtonMode='always'
              onChangeText={this.syncVal()}
              placeholder='请输入关键字'
              style={styles.searchInput}
            ></TextInput>
            <View style={styles.scan}>
              <Image source={require('../../static/img/扫描.png')} style={{ width: 24, height: 24, resizeMode: 'cover' }}></Image>
            </View>
          </View>
          <View style={[styles.scan, { marginLeft: 10 }]}>
            <Image source={require('../../static/img/下载.png')} style={{ width: 24, height: 24, resizeMode: 'cover' }}></Image>
          </View>
        </View>
        <View style={[styles.bg, { opacity: this.props.transparent ? 0:1}]}  ref={(c) => this.navbg = c}></View>
       
      </View>

    )
  }
}
const styles = StyleSheet.create({

  searchBox: {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 100,
    height: globalCss.statusBar_height + (Platform.OS == 'IOS' ? globalCss.navBar_ios : globalCss.navBar_android),
    backgroundColor: 'green'
  },
  navBar: {
    width: '100%',
    // height:40,
    height: Platform.OS == 'IOS' ? globalCss.navBar_ios : globalCss.navBar_android,
    flexDirection: 'row',
    paddingHorizontal: 11,
    position: 'absolute',
    top: globalCss.statusBar_height,
    left: 0,
    zIndex: 101,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  inputBox: {
    backgroundColor: '#fff',
    height: 32,
    borderRadius: 4,
    flexDirection: 'row',
    flex: 1,
    // width: '100%', 
  },
  scan: {
    width: 32,
    height: 32,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    padding: 0
  },
  bg: {
    flex: 1,
    backgroundColor:globalCss.c_primary
  }
});