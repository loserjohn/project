import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  Image,
  View,
  ActivityIndicator
} from 'react-native';
import globalCss from '../utils/globalStyle.js'
import ClassItem from '../components/ClassItem';

// 主要部分
export default class classfy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { key: 'asadf', icon: 't1',name:'视频音乐' },
        { key: 'b123', icon: 't2',name:'通讯社交' },
        { key: 'c12', icon: 't3',name:'摄影美图' },
        { key: 'da', icon: 't4' ,name:'生活实用'},
        { key: 'easd', icon: 't5',name:'娱乐消遣' },
        { key: 'f', icon: 't6' ,name:'购物优惠'},
        { key: 'g', icon: 't7' ,name:'新闻阅读'},
        { key: 'h', icon: 't8',name:'旅游出行' },
        { key: 'i', icon: 't9',name:'育儿母婴' },
        { key: 'j', icon: 't10' ,name:'健康美容'},
        { key: 'kasd', icon: 't11' ,name:'系统工具'},
        { key: 'las', icon: 't12',name:'教育学习' }
      ],
      data2: [
        { key: 'asadf', icon: 't1',name:'休闲益智' },
        { key: 'b123', icon: 't2',name:'角色扮演' },
        { key: 'c12', icon: 't3',name:'摄影美图' },
        { key: 'da', icon: 't4' ,name:'飞行射击'},
        { key: 'easd', icon: 't5',name:'经营策略' },
        { key: 'f', icon: 't6' ,name:'棋牌天地'},
        { key: 'g', icon: 't7' ,name:'网络游戏'},
        { key: 'h', icon: 't8',name:'赛车游戏' },
        { key: 'i', icon: 't9',name:'四三人称射击' }
      ],
      loading: false,
      currentType:this.props.type,
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
  _renderItem = ({ item }) => (
    <ClassItem item={item} type={this.props.type}></ClassItem>
  );
  _keyExtractor = (item, index) => item.key;
  _initData(){
    if(this.state.currentType == 'app'){
      return this.state.data
    }
    if(this.state.currentType == 'game'){
      return this.state.data2
    }

  }
  render() {
    return (
      <FlatList
        data={this._initData()}
        extraData={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        // onEndReached={this.loadMore}
        // onEndReachedThreshold={20}
        // onRefresh={this.refresh}
        // refreshing={this.state.loading}
        // ListFooterComponent={<ActivityIndicator size="large" color="#0000ff" />} 
      />
    )
  }

}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    backgroundColor: '#00ff00',
  }
});