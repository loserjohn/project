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



// 主要部分
export default class MediaItem extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return <TouchableOpacity style={[styles.viewPager,{marginRight:this.props.last?0:33}]}>
                        <Image source={{ uri: ('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553147397296&di=f3b52d8a725a918c423e5af1b909cd9f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb8d0b451dbd89c5905ba027402796b6dba01c1fd230d4-M7oKGn_fw658') }} style={styles.prePic}></Image>
                        <Text style={styles.title}>花椒直播</Text>
                        <Text style={globalCss.c_text}>37.25MB</Text> 
                </TouchableOpacity>
    }

}
const styles = StyleSheet.create({
    viewPager: {
        width: 50 
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
    prePic:{
         width: 50, 
         height: 50, 
         resizeMode: 'cover', 
         marginRight: 10, 
         borderRadius:4
    }

});