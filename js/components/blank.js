import React, {
    Component
  } from 'react';
  import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import globalCss from '../utils/globalStyle.js'


  
  // 主要部分
  export default class blank extends Component {
    constructor(props) {
      super(props)
  
    }
 
    render() {
     
      return <View style={styles.viewPager}></View>
    }
  
  }
  const styles = StyleSheet.create({
    viewPager: {
      backgroundColor: '#f4f4f4',
      height:6,
      width:'100%',
      borderBottomWidth:0.5,
      borderColor:"#ededed"
    },
  
  });