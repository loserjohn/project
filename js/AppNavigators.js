
import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createSwitchNavigator,createBottomTabNavigator } from 'react-navigation';
import HomePage from './pages/HomePage';
import ItemDetail from './pages/ItemDetail';
import WelCome from './pages/WelCome'


// import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MIcon from 'react-native-vector-icons/MaterialIcons';

// 欢迎页
const Init = createStackNavigator({
    WelCome: {
        screen: WelCome,
        navigationOptions:{
            header:null
        }
    }
})

// 正式内容页
const Main = createStackNavigator({   
    // 首页的底部tab
    HomePage: {
        screen: HomePage,
        navigationOptions:{
            header:null
        }
    },
    // app或者游戏详情
    ItemDetail:{
        screen: ItemDetail,
        navigationOptions:{
            header:null
        }
    }
},{
    initialRouteName :'HomePage',
})

//欢迎页跳转不可返回
export const AppNavigators = createSwitchNavigator({
    Init:Init,
    Main:Main
},{
    initialRouteName :'Main'
})

export default AppNavigators;