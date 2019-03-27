import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
// import ViewPager from "@react-native-community/viewpager";

export default class AboutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '111' 
        }
    }
    componentWillMount() {

        // console.log(this.props.navigation)
        let navi =  this.props.navigation;
       
        setTimeout(()=>{
          navi.navigate('Main')

        },2000)
    }

    render() {
        return (
          <View style={styles.viewPager}>
          <Image   source={require('../../static/img/wel1.png')} style={{width: '100%', height: '100%'}}></Image>
      </View>
        ) 
         

    }

}
const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
      // backgroundColor: '#00ff00',
    }
  });