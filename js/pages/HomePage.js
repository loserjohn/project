import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import Tab1 from '../pages/Tab1'
import Tab2 from '../pages/Tab2' 
import Tab3 from '../pages/Tab3' 
import Tab4 from '../pages/Tab4' 
import Tab5 from '../pages/Tab5' 
import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs';

const Tabpage = {
    Tab1: {
        screen: Tab1,
        navigationOptions:{
            header:null,
            title:'推荐',
            tabBarIcon:({focused,tintColor})=>{ 
                // const tab = focused?
                return (
                    <Image style={{width: 20, height: 18,tintColor:focused?tintColor:'#666666'}} source={require('../../static/img/Star_c.png')}/>
                )
            }     
        }
    },
    Tab2: {
        screen: Tab2,
        navigationOptions:{
            header:null,
            title:'应用',
            tabBarIcon:({focused,tintColor})=>{
                // console.log(focused,tintColor)
                return (
                    <Image style={{width: 20, height: 18,tintColor:focused?tintColor:'#666666'}} source={require('../../static/img/tab2.png')}/> 
                )
            }    
        }
    }, 
    Tab3: {
        screen: Tab3,
        navigationOptions:{
            header:null,
            title:'游戏',
            tabBarIcon:({focused,tintColor})=>{
                return (
                    <Image style={{width: 20, height: 18,tintColor:focused?tintColor:'#666666'}} source={require('../../static/img/tab3.png')}/>
                )
            }    
        }
    },
    Tab4: {
        screen: Tab4,
        navigationOptions:{
            header:null,
            title:'排行',
            tabBarIcon:({focused,tintColor})=>{
                return (
                   <Image style={{width: 20, height: 18,tintColor:focused?tintColor:'#666666'}} source={require('../../static/img/tab4.png')}/>
                )
            }    
        } 
    },
    Tab5: {
        screen: Tab5,
        navigationOptions:{
            header:null,
            title:'管理',
            tabBarIcon:({focused,tintColor})=>{ 
                return (
                    <Image style={{width: 20, height: 18,tintColor:focused?tintColor:'#666666'}} source={require('../../static/img/tab5.png')}/>
                )
            }    
        }
    },
}
// TabBarComponent
class TabBarComponent extends Component {
    constructor(props){ 
        super(props);
        // console.log(props)
    }
    render(){    
        return <BottomTabBar 
            {...this.props}
        />
    }
} 

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        // console.log(-1,this.props.navigation)
        global.Navigater = this.props.navigation
    }
    initNav(){
        if(this.Tabs ){
            return this.Tabs 
        }

        // 创建底部标签栏
        const TabBar = createBottomTabNavigator(Tabpage,{  
            initialRouteName :'Tab1',    
            tabBarComponent:props=>{
                return <TabBarComponent {...props} />
            } ,
            tabBarOptions:{
                activeTintColor :'#04BBFF',
                inactiveTintColor :'#666666' 
            },
           
            showLabel:false,
            backBehavior:'none',
            lazy :true
        })
        // console.log('TabBar',TabBar.router) 
        return this.Tabs = TabBar
    }
    render() {
        const TabBar = this.initNav()
        const AppContainer = createAppContainer(TabBar);
        return <AppContainer/>
    }
    

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
    }
  });