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
    Platform,
    TouchableOpacity
  } from 'react-native';
  import globalCss from '../utils/globalStyle.js'
  import PropTypes from 'prop-types';

  import FontAwesome from 'react-native-vector-icons/FontAwesome'
  import NavigateUtil from '../utils/navigate.js'

  // 搜索的头部部分
  export default class NavBar extends Component {
    constructor(props) {
      super(props)
    }
    static propTypes = {
        title: PropTypes.string,
        navigation: PropTypes.object,
        hideLeftArrow: PropTypes.bool, //是否隐藏左边返回 
        hideContent: PropTypes.bool,//是否隐藏中间标题部分
        quiet:PropTypes.bool,  //是否沉浸式
        contentCompnent:PropTypes.func, //中间部分的插槽

        leftButton: PropTypes.func,
        rightButton: PropTypes.func,

        backgroundColor: PropTypes.string,

        statusBarBgColor: PropTypes.string,
        barStyle: PropTypes.string, 
    }
 
    static defaultProps = { 
        title: "标题",
        hideLeftArrow: false,
        hideContent:false,
        quiet:false,
        pressRight: () => {
        }
    }
    // 返回页面
    _back=()=>{
      NavigateUtil.naviBack(this.props.navigation)
    }
    // 左边的按钮
    _left(){
        if(this.props.hideLeftArrow){
          return <View style={styles.sideBtn}></View>
        }
        if(this.props.leftButton){
            return <View  style={styles.sideBtn}>{this.props.leftButton()}</View>
        }else{
            return (<TouchableOpacity style={styles.sideBtn} onPress={this._back}>
                 <FontAwesome name={'angle-left'} size={16} color="#fff"></FontAwesome>
                <Text style={{color:'#fff',marginLeft:5}}>返回</Text>
            </TouchableOpacity>)
        }
    }
    // 右边按钮
    _right(){
        if(this.props.rightButton){
            return  (<View style={styles.sideBtn}>{this.props.rightButton()}</View>)
        }else{
            return (<View style={styles.sideBtn}></View>)
        }
    }
    // 中间部分渲染
    _renderContent(){
        if(this.props.contentCompnent){
          return this.props.contentCompnent()
        }else if(this.props.hideContent){
          return <View ></View>
        }else{
          return (<View ><Text style={{color:'#fff'}}>{this.props.title}</Text></View>)   
        }        
    }
    render() {
      return (
        <View style={[styles.navBox,{position:this.props.quiet?'absolute':'relative',backgroundColor:this.props.backgroundColor?this.props.backgroundColor:(this.props.quiet?'transparent':globalCss.c_primary)}]}>
             <View style={{height:globalCss.statusBar_height,backgroundColor:'transparent'}}></View>
             <View style={styles.navBar}>          
                {this._left()}                       
                <View style={styles.titleContent}>
                    {this._renderContent()}
                </View>   
                {this._right()}
             
            </View>
        </View>
       
      )
    }
  }
  const styles = StyleSheet.create({
    
    navBox: {
      width: '100%',
      left:0,
      top:0,
      zIndex:202,
    },
    navBar:{
      width:'100%',
      height:Platform.OS == 'IOS'?globalCss.navBar_ios:globalCss.navBar_android,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      // backgroundColor:'green',
      zIndex:101,
    },
    sideBtn:{
        minWidth:Platform.OS == 'IOS'?globalCss.navBar_ios:globalCss.navBar_android,
        height:Platform.OS == 'IOS'?globalCss.navBar_ios:globalCss.navBar_android,
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    titleContent:{
        flex:1,
        height:Platform.OS == 'IOS'?globalCss.navBar_ios:globalCss.navBar_android,
        // backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    }
  
  });