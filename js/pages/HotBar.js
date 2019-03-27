

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
    ScrollView,
    ActivityIndicator,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import globalCss from '../utils/globalStyle.js'
import ListItem from '../components/ListItem';
import PropTypes from 'prop-types';
import Blank from '../components/blank';

/**
 *
 *
 * @class List
 * @extends {Component}
 */
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: this.props.list ? this.props.list : []
        }
    }
    render() {
        const items = this.state.list.map((item, index) => {
            return <ListItem last={index == this.state.list.length - 1} key={index}></ListItem>
        })
        return (
            <View style={styles.menuBox}>
                {items}
            </View>
        )
    }
}

// 主要部分
export default class hotBar extends Component {
    static propTypes = {
        type: PropTypes.string
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
            currentType: this.props.type,
            loading: false
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
        <ListItem type={this.props.type}></ListItem>
    );
    render() {
        return (
            <ScrollView>
                <View style={styles.hotBar}>
                    <ImageBackground source={require('../../static/img/tab4/bg.png')} style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
                         <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <View style={styles.prePicBox}>
                                <Image style={styles.prePic} source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553415766257&di=6995a34501a7fb92c7473b02199531ca&imgtype=0&src=http%3A%2F%2Fa201.phobos.apple.com%2Fus%2Fr30%2FPurple5%2Fv4%2F0e%2Fe4%2F2f%2F0ee42fec-5477-0487-dbea-d3ec3d363726%2Fpr_source.png%3FdownloadKey%3D1427588283_d2fe86ec657ebf48d3c990f31c9e423d') }}></Image>
                                <Image style={styles.levelTip} source={require('../../static/img/tab4/d2.png')} ></Image>
                            </View>
                            <View style={styles.whiteBox1}>
                                <Text style={styles.title}>花椒直播</Text>
                                <Text style={globalCss.c_text}>热搜指数 <Text style={{ color: '#f78f5d' }}>99.4</Text></Text>
                                <Image source={require('../../static/img/down.png')} style={{ width: 25, height: 25, resizeMode: 'cover', marginTop: 5 }}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={styles.prePicBox}>
                                <Image style={styles.prePic} source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553416150076&di=04f19d92b6555a6bc6b91d32dddecfc2&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8c3d11ad7c3896f04509d26406387c460a572c9915b59-uMpr80_fw658') }}></Image>
                                <Image style={styles.levelTip} source={require('../../static/img/tab4/d1.png')} ></Image>
                            </View>
                            <View style={styles.whiteBox2}>
                                <Text style={styles.title}>花椒直播</Text>
                                <Text style={globalCss.c_text}>热搜指数 <Text style={{ color: '#f78f5d' }}>99.4</Text></Text>
                                <Image source={require('../../static/img/down.png')} style={{ width: 25, height: 25, resizeMode: 'cover', marginTop: 5 }}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={styles.prePicBox}>
                                <Image style={styles.prePic} source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554010897&di=fcb0d4e00252884a41e3486836163267&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fdce6737ed4c91618cb6749f12aae38a56e03f41d34b49-G7iSIP_fw658') }}></Image>
                                <Image style={styles.levelTip} source={require('../../static/img/tab4/d3.png')} ></Image>
                            </View>
                            <View style={styles.whiteBox1}>
                                <Text style={styles.title}>花椒直播</Text>
                                <Text style={globalCss.c_text}>热搜指数 <Text style={{ color: '#f78f5d' }}>99.4</Text></Text>
                                <Image source={require('../../static/img/down.png')} style={{ width: 25, height: 25, resizeMode: 'cover', marginTop: 5 }}></Image>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <Blank></Blank>
                <List list={[1, 2, 3, 4, 5, 5]}></List>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        backgroundColor: '#00ff00',
    },
    hotBar: {
        width: '100%',
        height: 186,
        position: 'relative'
    },
    whiteBox1: {
        width: '100%',
        height: 82,
        backgroundColor: '#fff',
        borderBottomWidth: .5,
        borderColor: '#ededed',
        alignItems: 'center',
    },
    whiteBox2: {
        width: '100%',
        height: 96,
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#ededed',
        alignItems: 'center',
    },
    title: {
        lineHeight: 30,
        color: '#373737'
    },
    prePicBox:{
        position: 'relative',
        width: 50,
        height: 50,
        resizeMode: 'cover',
        // overflow: 'hidden',
        marginBottom: 5
    },
    prePic: {
        position: 'relative',
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 10,
        borderRadius:4
        // overflow: 'hidden',
    },
    levelTip:{
        width:30,
        height:30,
        position:'absolute',
        right:-15,
        top:-15
    }
});