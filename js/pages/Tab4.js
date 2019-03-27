import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Blank from '../components/blank';
import globalCss from '../utils/globalStyle.js'
import Search from '../components/Search';
import { createMaterialTopTabNavigator, createAppContainer, MaterialTopTabBar } from 'react-navigation';

import HotBar from '../pages/HotBar'
import Swiper from 'react-native-swiper';



// 主要部分
export default class Tab4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active:0
    }
  }
  componentWillMount() {


  }
  initNav() {
    return
  }
  _onPressButton=()=>{
    if(this.state.active == 0){  
      this.setState({
        active:1
      })
    }else{
      this.setState({
        active:0
      })
    }
  }
  render() {
    return (
      <View style={styles.viewPager}>
        <Search ></Search>
        <View style={{ flex: 1 }}>
          <View style={styles.tabBarTitle}>
            <TouchableOpacity  style={[styles.tabs,{borderBottomWidth:this.state.active==0?2:0}]}><Text style={[styles.text,{color:this.state.active==0?globalCss.c_primary:globalCss.c_text}]}>应用榜</Text></TouchableOpacity>
            <TouchableOpacity  style={[styles.tabs,{borderBottomWidth:this.state.active==1?2:0}]}><Text style={[styles.text,{color:this.state.active==1?globalCss.c_primary:globalCss.c_text}]}>单机榜</Text></TouchableOpacity>
            <TouchableOpacity  style={[styles.tabs,{borderBottomWidth:this.state.active==2?2:0}]}><Text style={[styles.text,{color:this.state.active==2?globalCss.c_primary:globalCss.c_text}]}>网游榜</Text></TouchableOpacity>
            <TouchableOpacity  style={[styles.tabs,{borderBottomWidth:this.state.active==3?2:0}]}><Text style={[styles.text,{color:this.state.active==3?globalCss.c_primary:globalCss.c_text}]}>热搜榜</Text></TouchableOpacity>
            
          </View>
          <Blank></Blank>
          <View style={{ flex: 1 }}> 
          <Swiper
            showsButtons={false}
            loop={false}
            autoplay={false}
            showsPagination={false}
            onIndexChanged={index=>{this.setState({
              active:index
            })}} 
          >
            <View style={styles.slide}>
               <HotBar type={0}></HotBar>
            </View>
            <View style={styles.slide}>
              <HotBar type={1}> </HotBar>
            </View>
            <View style={styles.slide}>
               <HotBar type={2}></HotBar>
            </View>
            <View style={styles.slide}>
              <HotBar type={3}> </HotBar>
            </View>
          </Swiper>


          </View>
        </View>
      </View>
    )

  }

}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    // backgroundColor: '#00ff00', 
  },
  tabBarTitle: {
    height: 40,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:25
  },
  tabs:{
    width:64,
    height:40,
    justifyContent:'center',
    borderColor:globalCss.c_primary
  },
  text:{
    textAlign:'center'
  }
});