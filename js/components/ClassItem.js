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
import FontAwesome from 'react-native-vector-icons/FontAwesome'


// 主要部分
export default class ClassItem extends Component {
    constructor(props) {
        super(props)
        let url
        if(this.props.type == 'app'){
            switch (this.props.item.icon){
                case 't1':
                 url = require('../../static/img/tab2/t1.png')   
                break;
                case 't2':
                 url = require('../../static/img/tab2/t2.png')   
                break;
                case 't3':
                 url = require('../../static/img/tab2/t3.png')   
                break;
                case 't4':
                 url = require('../../static/img/tab2/t4.png')   
                break;
                case 't5':
                 url = require('../../static/img/tab2/t5.png')   
                break;
                case 't6':
                 url = require('../../static/img/tab2/t6.png')   
                break;
                case 't7':
                 url = require('../../static/img/tab2/t7.png')   
                break;
                case 't8':
                 url = require('../../static/img/tab2/t8.png')   
                break;
                case 't9':
                 url = require('../../static/img/tab2/t9.png')   
                break;
                case 't10':
                 url = require('../../static/img/tab2/t10.png')   
                break;
                case 't11':
                 url = require('../../static/img/tab2/t11.png')   
                break;
    
                case 't12':
                 url = require('../../static/img/tab2/t12.png')   
                break;
                default:
                 url = ''  
                break;    
            }    
        }
        if(this.props.type == 'game'){
            switch (this.props.item.icon){
                case 't1':
                 url = require('../../static/img/tab3/t1.png')   
                break;
                case 't2':
                 url = require('../../static/img/tab3/t2.png')   
                break;
                case 't3':
                 url = require('../../static/img/tab3/t3.png')   
                break;
                case 't4':
                 url = require('../../static/img/tab3/t4.png')   
                break;
                case 't5':
                 url = require('../../static/img/tab3/t5.png')   
                break;
                case 't6':
                 url = require('../../static/img/tab3/t6.png')   
                break;
                case 't7':
                url = require('../../static/img/tab3/t4.png')   
               break;
               case 't8':
                url = require('../../static/img/tab3/t5.png')   
               break;
               case 't9':
                url = require('../../static/img/tab3/t6.png')   
               break;
                default:
                 url = ''  
                break;    
            }    
        }

        this.state={
            url:url
        }

    }

    render() {
        const url = this.state.url
        return (
            <TouchableOpacity style={[styles.viewPager, { borderBottomWidth: this.props.last ? .5 : 0 }]}>
                <View style={[styles.content, { borderBottomWidth: !this.props.last ? .5 : 0 }]}>
                    <Image source={url} style={styles.prePic}></Image>
                    <View style={{ flex: 1 }}>
                        <View><Text style={styles.title}>{this.props.item.name}</Text></View>
                        <Text style={globalCss.c_text} ellipsizeMode="tail" numberOfLines={1}>视频 音乐 铃声 播放器</Text>
                    </View>
                    <FontAwesome name={'angle-right'} size={26} color="#999" ></FontAwesome>
                </View>
            </TouchableOpacity>
        )
    }

}
const styles = StyleSheet.create({
    viewPager: {
        backgroundColor: '#fff',
        height: 65,
        width: '100%',
        paddingHorizontal: 10,
        borderColor: "#ededed",
       
    },
    content: {
        height: 65,
        borderBottomWidth: 0.5,
        borderColor: "#ededed",
        flexDirection: 'row',
        paddingVertical: 10,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: "center",
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
        width: 30,
        height: 30,
        resizeMode: 'cover',
        marginRight: 10,
        borderRadius: 4
    }

});