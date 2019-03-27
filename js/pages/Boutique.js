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
  import ListItem from '../components/ListItem';
  import PropTypes from 'prop-types';
  
  // 主要部分
  export default class Boutique extends Component {
    static propTypes = {
      type:PropTypes.string
    }
    constructor(props) {
      super(props)
      this.state = {
        data: [
          { key: 'asadf', icon: 't1' },
          { key: 'b123', icon: 't2' },
          { key: 'c12', icon: 't3' },
          { key: 'da', icon: 't4' },
          { key: 'easd', icon: 't5' },
          { key: 'f', icon: 't6' },
          { key: 'g', icon: 't7' },
          { key: 'h', icon: 't8' },
          { key: 'i', icon: 't9' },
          { key: 'j', icon: 't10' },
          { key: 'kasd', icon: 't11' },
          { key: 'las', icon: 't12' },
          { key: 'mq', icon: 't13' },
          { key: 'n23', icon: 't14' }
        ],
        currentType:this.props.type,
        loading:false
      }
    }
    componentWillMount() {

  
    }
    // 加载更多
    loadMore=()=>{
        console.log('加载更多')
    }
    // 刷新
    refresh=()=>{
        console.log('刷新') 
    }
    _renderItem = ({item}) => (
        <ListItem type={this.props.type}></ListItem>
      );
    render() {
      return (
        <FlatList
            data={this.state.data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onEndReached={this.loadMore}
            onEndReachedThreshold={20}
            onRefresh={this.refresh}
            refreshing={this.state.loading}
            ListFooterComponent={<ActivityIndicator size="large" color="#0000ff" />}
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