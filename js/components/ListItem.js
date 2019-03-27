import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import globalCss from '../utils/globalStyle.js'
import NavigateUtil from '../utils/navigate.js'
import { Portal, Toast,Modal } from '@ant-design/react-native'

// 主要部分
export default class ListItem extends Component {
    constructor(props) {
        super(props)

    }
    // 选择下载
    _downLoad=()=>{
        console.log(111)
        Modal.operation([
            { text: '直接安装', onPress: () => console.log('标为未读被点击了') },
            { text: '应用商店安装', onPress: () => console.log('置顶聊天被点击了') },
          ]);
    }
    render() {
        return (          
            <TouchableOpacity style={[styles.viewPager, { borderBottomWidth: this.props.last ? .5 : 0 }]} onPress={()=>{NavigateUtil.navigateTo('ItemDetail',{})}} >
                <View style={[styles.content, { borderBottomWidth: !this.props.last ? .5 : 0 }]}>
                    <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553147397296&di=f3b52d8a725a918c423e5af1b909cd9f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb8d0b451dbd89c5905ba027402796b6dba01c1fd230d4-M7oKGn_fw658') }} style={styles.prePic}></Image>
                    <View style={{ flex: 1 }}>
                        <View style={styles.textBox}>
                            <View style={{ flex: 1 }}>
                                <View><Text style={styles.title}>快看漫画</Text></View>
                                <View><Text ><Text style={styles.rate}>4.4评分</Text> <Text style={globalCss.c_text}>27.9MB</Text> <Text style={globalCss.c_text}>已下载2157万次</Text></Text></View>
                            </View>
                            <TouchableOpacity onPress={this._downLoad}>
                                <Image source={require('../../static/img/down.png')} style={{ width: 25, height: 25, resizeMode: 'cover' }}></Image>
                            </TouchableOpacity>
                           
                        </View>
                        <Text style={globalCss.c_text} ellipsizeMode="tail" numberOfLines={1}>#漫画动漫# 漫画超全好看的士大夫漫画超全好看的士大夫漫画超全好看的士大夫</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }

}
const styles = StyleSheet.create({
    viewPager: {
        backgroundColor: '#fff',
        height: 70,
        width: '100%',
        paddingHorizontal: 10,
        borderColor: "#ededed",
    },
    content: {
        height: 70,
        borderBottomWidth: 0.5,
        borderColor: "#ededed",
        flexDirection: 'row',
        paddingVertical: 10
    },
    textBox: {
        width: '100%',
        flexDirection: 'row'
    },
    title: {
        // color:'#f78f5d',
        color: '#333',
        fontWeight: 'bold'
    },
    rate: {
        color: '#f78f5d'
    },
    prePic: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 10,
        borderRadius: 4
    }

});